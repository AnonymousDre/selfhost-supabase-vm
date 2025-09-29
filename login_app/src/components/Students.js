import { useState, useEffect } from "react";
import supabase from "../services/supabaseClient";

export default function Students() {
  const [students, setStudents] = useState([]);
  const [form, setForm] = useState({ name: "", course: "", year_level: "" });

  // Fetch students
  const fetchStudents = async () => {
    const { data, error } = await supabase.from("students").select("*").order("id");
    if (!error) setStudents(data);
  };

  // Handle form change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Add new student
  const addStudent = async (e) => {
    e.preventDefault();
    if (!form.name || !form.course || !form.year_level) return;
    await supabase.from("students").insert([form]);
    setForm({ name: "", course: "", year_level: "" });
    fetchStudents();
  };

  // Update year level (increment)
  const promoteStudent = async (id, year) => {
    await supabase.from("students").update({ year_level: year + 1 }).eq("id", id);
    fetchStudents();
  };

  // Delete student
  const deleteStudent = async (id) => {
    await supabase.from("students").delete().eq("id", id);
    fetchStudents();
  };

  useEffect(() => {
    fetchStudents();
  }, []);

  return (
    <div>
      <h2>Student Records CRUD</h2>
      <form onSubmit={addStudent}>
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Student Name"
        />
        <input
          name="course"
          value={form.course}
          onChange={handleChange}
          placeholder="Course"
        />
        <input
          name="year_level"
          type="number"
          value={form.year_level}
          onChange={handleChange}
          placeholder="Year Level"
        />
        <button type="submit">Add Student</button>
      </form>

      <ul>
        {students.map((s) => (
          <li key={s.id}>
            {s.name} — {s.course} — Year {s.year_level}
            <button onClick={() => promoteStudent(s.id, s.year_level)}>Promote</button>
            <button onClick={() => deleteStudent(s.id)}>❌</button>
          </li>
        ))}
      </ul>
    </div>
  );
}
