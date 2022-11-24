import React from "react";
import blogImg1 from "../../Assets/1.jpg";
import blogImg2 from "../../Assets/2.png";
import blogImg3 from "../../Assets/3.jpg";
import blogImg4 from "../../Assets/4.jpeg";

const BLog = () => {
  return (
    <div>
      <section className="overflow-hidden bg-gray-50 sm:grid sm:grid-cols-2 sm:items-center">
        <div className="p-8 md:p-12 lg:px-16 lg:py-24">
          <div className="mx-auto max-w-xl text-center sm:text-left">
            <h2 className="text-2xl font-bold text-gray-900 md:text-3xl">
              What are the different ways to manage a state in a React
              application?
            </h2>

            <p>
              When we talk about state in our applications, it’s important to be
              clear about what types of state actually matter.
            </p>
            <p>
              There are four main types of state you need to properly manage in
              your React apps:
            </p>
            <li>Local state</li>
            <li>Global state</li>
            <li>Server state</li>
            <li>URL state</li>
          </div>
        </div>

        <img alt="" src={blogImg1} className="w-full" />
      </section>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-5 my-10">
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <div className="bg-white p-4 sm:p-6">
            <time className="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            
              <h3 className="mt-0.5 text-lg text-gray-900">Local State</h3>
           

            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
              Local state is data we manage in one or another component. Local
              state is most often managed in React using the useState hook. For
              example, local state would be needed to show or hide a modal
              component or to track values for a form component, such as form
              submission, when the form is disabled and the values of a form’s
              inputs.
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <div className="bg-white p-4 sm:p-6">
            <time  className="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            
              <h3 className="mt-0.5 text-lg text-gray-900">Global State</h3>
           

            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
              Global state is data we manage across multiple components. Global
              state is necessary when we want to get and update data anywhere in
              our app, or in multiple components at least. A common example of
              global state is authenticated user state. If a user is logged into
              our app, it is necessary to get and change their data throughout
              our application. Sometimes state we think should be local might
              become global.
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <div className="bg-white p-4 sm:p-6">
            <time  className="block text-xs text-gray-500">
              10th Oct 2022
            </time>

          
              <h3 className="mt-0.5 text-lg text-gray-900">Server State</h3>
          

            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
              Data that comes from an external server that must be integrated
              with our UI state. Server state is a simple concept, but can be
              hard to manage alongside all of our local and global UI state.
              There are several pieces of state that must be managed every time
              you fetch or update data from an external server, including
              loading and error state. Fortunately there are tools such as SWR
              and React Query that make managing server state much easier.
            </p>
          </div>
        </article>
        <article className="overflow-hidden rounded-lg shadow transition hover:shadow-lg">
          <div className="bg-white p-4 sm:p-6">
            <time  className="block text-xs text-gray-500">
              10th Oct 2022
            </time>

            
              <h3 className="mt-0.5 text-lg text-gray-900">URL State</h3>
        

            <p className="mt-2 text-sm leading-relaxed text-gray-500 line-clamp-3">
              Data that exists on our URLs, including the pathname and query
              parameters. URL state is often missing as a category of state, but
              it is an important one. In many cases, a lot of major parts of our
              application rely upon accessing URL state. Try to imagine building
              a blog without being able to fetch a post based off of its slug or
              id that is located in the URL! There are undoubtedly more pieces
              of state that we could identify, but these are the major
              categories worth focusing on for most applications you build.
            </p>
          </div>
        </article>
      </div>

      <div className=" m-10">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img src={blogImg2} className="max-w-sm rounded-lg shadow-2xl" alt=""/>
          <div>
            <h1 className="text-5xl font-bold">
              How does prototypical inheritance work?
            </h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi. The Prototypal Inheritance is a feature in
              javascript used to add methods and properties in objects. It is a
              method by which an object can inherit the properties and methods
              of another object. Traditionally, in order to get and set the
              [[Prototype]] of an object, we use Object. getPrototypeOf and
              Object
            </p>
          </div>
        </div>
      </div>
      <div className=" m-10">
        <div className="hero-content flex-col lg:flex-row gap-10">
          <img src={blogImg3} className="max-w-sm rounded-lg shadow-2xl" alt=""/>
          <div>
            <h1 className="text-5xl font-bold">What is Unit Testing?</h1>
            <p className="py-6">
              In computer programming, unit testing is a software testing method
              by which individual units of source code—sets of one or more
              computer program modules together with associated control data,
              usage procedures, and operating procedures—are tested to determine
              whether they are fit for use.
            </p>
            <h1 className="text-5xl font-bold">
              Why should we write Unit Testing?
            </h1>
            <p className="py-6">
              Unit testing is a powerful tool for software quality -- and has
              been for decades. Unit tests provide a fundamental check that an
              application meets its software design specifications and behaves
              as intended. When done well, unit tests:
              <li>
                decrease defects and expose them early in the development
                lifecycle;
              </li>
              <li>increase code readability;</li>
              <li>enable code reuse;</li>
              <li>improve deployment velocity.</li>
            </p>
          </div>
        </div>

        <div className=" m-10">
          <div className="hero-content flex-col lg:flex-row gap-10">
            <img src={blogImg4} className="max-w-sm rounded-lg shadow-2xl" alt=""/>
            <div>
              <h1 className="text-5xl font-bold">React VS Angular VS Vue</h1>
              <p className="py-6">
                Angular vs. React vs. Vue is one of primary choices in every web
                development process. The frontend framework you select
                influences almost everything: speed, and, therefore, cost of
                development, compatibility with other technologies, app speed
                and performance, and so on. The variety of technology available
                is enormous. That’s why we’ve decided to prepare a series of
                articles comparing the most popular technologies for different
                purposes. We’re starting with frontend frameworks because they
                are responsible for what users see in their browser.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BLog;
