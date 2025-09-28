import { createServer, Model } from "miragejs";
import { data } from "../../dummy/dummayjob";

export function makeServer({ environment = "development" } = {}) {
  const savedJobs = JSON.parse(localStorage.getItem("jobCreatedByAdmin") || "[]");
  const savedApplications = JSON.parse(localStorage.getItem("jobApply") || "[]");
  const savedSubmissions = JSON.parse(localStorage.getItem("assessmentSubmissions") || "[]");
  const savedFeedbacks = JSON.parse(localStorage.getItem("assessmentFeedbacks") || "[]");

  return createServer({
    environment,

    models: {
      job: Model,
      applyJob: Model,
      assessmentSubmission: Model,
      feedback: Model,
    },

    seeds(server) {
      savedJobs.forEach((job) => server.db.jobs.insert(job));
      savedApplications.forEach((app) => server.db.applyJobs.insert(app));
      savedSubmissions.forEach((s) => server.db.assessmentSubmissions.insert(s));
      savedFeedbacks.forEach((f) => server.db.feedbacks.insert(f));
    },

    routes() {
      this.namespace = "api";

      this.post("/createJob", (schema, request) => {
        let data = JSON.parse(request.requestBody);

        const job = schema.jobs.create(data);

        const currentJobs = JSON.parse(localStorage.getItem("jobCreatedByAdmin") || "[]");
        currentJobs.push(job.attrs);
        localStorage.setItem("jobCreatedByAdmin", JSON.stringify(currentJobs));

        return { message: "Job created successfully", job: job.attrs };
      });

      this.post("/applyJob", (schema, request) => {
        const data = JSON.parse(request.requestBody);

        const application = schema.applyJobs.create(data);

        const currentApplications = JSON.parse(localStorage.getItem("jobApply") || "[]");
        currentApplications.push(application.attrs);
        localStorage.setItem("jobApply", JSON.stringify(currentApplications));

        return { message: "Application submitted successfully", application: application.attrs };
      });

      this.post("/assessments/:id/submit", (schema, request) => {
        let assessmentId = request.params.id;
        let data = JSON.parse(request.requestBody);

        const submission = schema.assessmentSubmissions.create({
          ...data,
          assessmentId,
          submittedAt: new Date().toISOString(),
        });

        const currentSubs = JSON.parse(localStorage.getItem("assessmentSubmissions") || "[]");
        currentSubs.push(submission.attrs);
        localStorage.setItem("assessmentSubmissions", JSON.stringify(currentSubs));

        return {
          message: `Assessment ${assessmentId} submitted successfully`,
          submission: submission.attrs,
        };
      });

      this.post("/feedback", (schema, request) => {
        let data = JSON.parse(request.requestBody);

        const feedback = schema.feedbacks.create({
          ...data,
          createdAt: new Date().toISOString(),
        });

        const currentFeedbacks = JSON.parse(localStorage.getItem("assessmentFeedbacks") || "[]");
        currentFeedbacks.push(feedback.attrs);
        localStorage.setItem("assessmentFeedbacks", JSON.stringify(currentFeedbacks));

        return {
          message: "Feedback saved successfully ✅",
          feedback: feedback.attrs,
        };
      });

     
      this.get("/LoadJob", () => {
        return data; 
      });

      this.get("/jobs", (schema) => schema.jobs.all());
      this.get("/applications", (schema) => schema.applyJobs.all());
      this.get("/submissions", (schema) => schema.assessmentSubmissions.all());
      this.get("/feedbacks", (schema) => schema.feedbacks.all());
    },
  });
}



