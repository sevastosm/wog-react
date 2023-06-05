import React from "react";
import useResources from "../../hooks/UseResources";
import {applyContact} from "../../api/apis";
export default function ContactPage() {
  const resourses = useResources([
    "ContactTextEnterEmailErr",
    "ContactTextEnterSubject",
    "ContactTextSubmit",
  ]);

  const handleSubmit=(e)=>{
    e.preventDefault()
    const data = new FormData(e.target);
    applyContact({
      Email:data.get('email'),
      Body:data.get('body'),
      name:''
    })

  }

  if (!resourses.length) return null;
  return (
    <form className="mt-4 contact p-2" onSubmit={handleSubmit}>
      <div className="col-lg-9 col-sm-12 m-auto">
        <div class="mb-3">
          <label for="exampleFormControlInput1" class="form-label">
            {resourses[1].Text}
          </label>
          <input
            type="email"
            name ="email"
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
            name ="body"
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
