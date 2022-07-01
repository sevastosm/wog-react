import React from "react";
import useResources from "../../hooks/UseResources";
export default function ContactPage() {
  const resourses = useResources([
    "ContactTextEnterEmailErr",
    "ContactTextEnterSubject",
    "ContactTextSubmit",
  ]);
  if (!resourses.length) return null;
  console.log("RES", resourses);
  return (
    <form className="mt-4 contact p-2">
      <div className="col-lg-9 col-sm-12 m-auto">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            {resourses[1].Text}
          </label>
          <input
            type="email"
            class="form-control"
            id="exampleFormControlInput1"
            placeholder="name@example.com"
          />
        </div>

        <div class="mb-3">
          <label for="exampleFormControlTextarea1" class="form-label">
            {resourses[2].Text}
          </label>
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
          ></textarea>
        </div>
        <button className="button tonglefilters">{resourses[0].Text}</button>
      </div>
    </form>
  );
}
