import React from "react";
import { useForm } from "react-hook-form";

const Contact = () => {
  const { register, handleSubmit, reset } = useForm();

  const defaultValues = { email: "", password: "" };

  const submit = (data) => {
    console.log(data);
    reset(defaultValues);
  };
  return (
    <div>
      <form onSubmit={handleSubmit(submit)}>
        <select
          name="Start a project"
          type="Requirement"
          id="text"
          {...register("Requirement")}
        >
          <option value="Start a project">Start a project</option>
          <option value="Improve your Project">Improve your Project</option>
          <option value="Custom Requirement">Custom Requirement</option>
        </select>
        {/* ffhdsvbhgytrraxcvchdfytsrfxcbvnbhgdffd */}
        <div>
          <label htmlFor="text-input">Full name</label>
          <input type="text" id="text-input" {...register("fullName")} />
        </div>
        <div>
          <label htmlFor="email-input">Email address</label>
          <input type="email" id="email-input" {...register("email")} />
        </div>
        <div>
          <label htmlFor="number-input">Phone number</label>
          <input type="number" id="number-input" {...register("phoneNumber")} />
        </div>
        <div>
          <label htmlFor="text-input">Full name</label>
          <input type="text" id="text-input" {...register("fullName")} />
        </div>
        <select
          value="KnowBy"
          name="KnowBy"
          type="text"
          id="KnowBy-input"
          {...register("KnowBy")}
        >
          <option value="startProject">Start a project</option>
          <option value="improveProject">Improve your Project</option>
          <option value="customReq">Custom Requirement</option>
        </select>
        <div>
          <label htmlFor="text-input">Full name</label>
          <input type="text" id="text-input" {...register("fullName")} />
        </div>
        <button className="home-btnb-dummy">See More</button>
      </form>
    </div>
  );
};

export default Contact;
