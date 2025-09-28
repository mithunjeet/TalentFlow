import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { jobs } from "../components/assesmentQuesion";

export default function AssessmentPage() {
  const { id } = useParams();
  const job = jobs.find((j) => j.id === Number(id));

  const [answers, setAnswers] = useState({});
  const [timeLeft, setTimeLeft] = useState(15 * 60); 
  const [started, setStarted] = useState(false); // 👈 new state for instruction page
  const [submitted, setSubmitted] = useState(false);
  const [showFeedback, setShowFeedback] = useState(false);
  const [feedback, setFeedback] = useState({ rating: "", comments: "" });

  const apiUrl =
    import.meta.env.VITE_ENABLE_MIRAGE === "true"
      ? "/api"
      : import.meta.env.VITE_API_URL;

  // Timer only runs if started
  useEffect(() => {
    if (!started || timeLeft <= 0 || submitted) return;
    const timer = setInterval(() => setTimeLeft((t) => t - 1), 1000);
    return () => clearInterval(timer);
  }, [started, timeLeft, submitted]);

  // Auto-submit when time up
  useEffect(() => {
    if (timeLeft <= 0 && started && !submitted) {
      handleSubmit();
    }
  }, [timeLeft, started]);

  if (!job) {
    return <h2 className="text-center text-red-500 mt-10">Assessment not found ❌</h2>;
  }

  const handleChange = (qid, value) => {
    setAnswers((prev) => ({ ...prev, [qid]: value }));
  };

  const handleSubmit = async () => {
    setSubmitted(true);
    try {
      const res = await fetch(`${apiUrl}/assessments/${job.id}/submit`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ jobId: job.id, answers }),
      });
      const data = await res.json();
      console.log("✅ Submitted to Mirage", data);
    } catch (err) {
      console.error("❌ Error submitting:", err);
    }
    setShowFeedback(true);
  };

  const handleFeedbackSubmit = async () => {
    try {
      const res = await fetch(`${apiUrl}/feedback`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          rating: feedback.rating,
          comments: feedback.comments,
          jobId: job.id,
        }),
      });
      const data = await res.json();
      console.log("✅ Feedback saved", data);
      alert("Thanks for your feedback!");
    } catch (err) {
      console.error("❌ Error saving feedback:", err);
    }
  };

  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;

  return (
    <div className="max-w-3xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-6">{job.title} - Assessment</h1>

      {/* Show instructions if not started */}
      {!started && !submitted && (
        <div className="border rounded-lg p-6 shadow-lg mb-6 bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Instructions</h2>
          <ul className="list-disc pl-6 mb-4 text-gray-700">
            <li>This exam contains <b>{job.assessment.length}</b> questions.</li>
            <li>You have <b>{Math.floor(timeLeft / 60)} minutes</b> to complete the exam.</li>
            <li>Questions include Multiple Choice, Single Choice, and Short Answer.</li>
            <li>Once submitted or time runs out, answers cannot be changed.</li>
            <li>Feedback form will appear after submission.</li>
          </ul>
          <button
            onClick={() => {
                const  flag = window.confirm("are you sure want to start")
                if(!flag) return
                setStarted(true)}} // 👈 start exam
            className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Start Exam
          </button>
        </div>
      )}

      {/* Timer */}
      {started && !submitted && (
        <div className="mb-4 text-red-600 font-semibold">
          Time Left: {minutes}:{seconds.toString().padStart(2, "0")}
        </div>
      )}

      {/* Questions */}
      {started && !submitted &&
        job.assessment.map((q) => (
          <div key={q.id} className="mb-6">
            <p className="font-medium mb-2">{q.question}</p>

            {q.type === "mcq" &&
              q.options.map((opt, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="checkbox"
                    disabled={submitted}
                    checked={answers[q.id]?.includes(opt) || false}
                    onChange={(e) => {
                      const prev = answers[q.id] || [];
                      if (e.target.checked) {
                        handleChange(q.id, [...prev, opt]);
                      } else {
                        handleChange(q.id, prev.filter((o) => o !== opt));
                      }
                    }}
                  />
                  {opt}
                </label>
              ))}

            {q.type === "single" &&
              q.options.map((opt, i) => (
                <label key={i} className="flex items-center gap-2">
                  <input
                    type="radio"
                    name={`q-${q.id}`}
                    value={opt}
                    disabled={submitted}
                    checked={answers[q.id] === opt}
                    onChange={(e) => handleChange(q.id, e.target.value)}
                  />
                  {opt}
                </label>
              ))}

            {q.type === "subjective" && (
              <textarea
                className="w-full border rounded p-2"
                rows="4"
                disabled={submitted}
                value={answers[q.id] || ""}
                onChange={(e) => handleChange(q.id, e.target.value)}
              />
            )}
          </div>
        ))}

      {/* Submit Button */}
      {started && !submitted && (
        <button
          onClick={handleSubmit}
          className="bg-purple-500 text-white px-6 py-2 rounded-lg hover:bg-purple-600 transition"
        >
          Submit Assessment
        </button>
      )}

      {/* Feedback Form */}
      {showFeedback && (
        <div className="mt-10 p-6 border rounded-lg shadow-lg bg-gray-50">
          <h2 className="text-xl font-bold mb-4">Feedback Form</h2>
          <label className="block mb-2">Rate this assessment:</label>
          <select
            className="border p-2 rounded w-full mb-4"
            value={feedback.rating}
            onChange={(e) => setFeedback({ ...feedback, rating: e.target.value })}
          >
            <option value="">Select Rating</option>
            <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
            <option value="4">⭐⭐⭐⭐ Good</option>
            <option value="3">⭐⭐⭐ Average</option>
            <option value="2">⭐⭐ Needs Improvement</option>
            <option value="1">⭐ Poor</option>
          </select>

          <label className="block mb-2">Additional Comments:</label>
          <textarea
            className="w-full border p-2 rounded mb-4"
            rows="4"
            value={feedback.comments}
            onChange={(e) => setFeedback({ ...feedback, comments: e.target.value })}
          />

          <button
            onClick={handleFeedbackSubmit}
            className="bg-green-500 text-white px-6 py-2 rounded-lg hover:bg-green-600 transition"
          >
            Submit Feedback
          </button>
        </div>
      )}
    </div>
  );
}