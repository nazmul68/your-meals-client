import React from "react";

const Blog = () => {
  return (
    <div className="my-20 w-5/6 mx-auto">
      <div
        tabIndex={0}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium ">
          Difference between SQL and NoSQL?
        </div>
        <div className="collapse-content">
          <p>
            tabIndex={0} SQL vs NoSQL: Five Main Differences SQL is the
            programming language used to interface with relational databases.
            (Relational databases model data as records in rows and tables with
            logical links between them). NoSQL is a class of DBMs that are
            non-relational and generally do not use SQL. There are five
            practical differences between SQL and NoSQL: 1.Language
            2.Scalability 3.Structure 4.Properties 5.Support and communities
          </p>
        </div>
      </div>

      <div
        tabIndex={1}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          What is JWT, and how does it work?
        </div>
        <div className="collapse-content">
          <p>
            tabIndex={1} JSON Web Token (JWT) is an open standard (RFC 7519) for
            securely transmitting information between parties as JSON object. It
            is compact, readable and digitally signed using a private key/ or a
            public key pair by the Identity Provider(IdP)
          </p>
        </div>
      </div>

      <div
        tabIndex={2}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          How does NodeJS handle multiple requests at the same time?
        </div>
        <div className="collapse-content">
          <p>
            tabIndex={2} NodeJS handle multiple client requests? NodeJS receives
            multiple client requests and places them into EventQueue. NodeJS is
            built with the concept of event-driven architecture. NodeJS has its
            own EventLoop which is an infinite loop that receives requests and
            processes them.
          </p>
        </div>
      </div>

      <div
        tabIndex={3}
        className="collapse collapse-plus border border-base-300 bg-base-100 rounded-box mb-5"
      >
        <div className="collapse-title text-xl font-medium">
          What is the difference between javascript and NodeJS?
        </div>
        <div className="collapse-content">
          <p>
            tabIndex={3} 1. JavaScript is a client-side scripting language that
            is lightweight, cross-platform, and interpreted. Both Java and HTML
            include it. Node.js, on the other hand, is a V8-based server-side
            programming language. As a result, it is used to create
            network-centric applications. It's a networked system made for
            data-intensive real-time applications. If we compare node js vs.
            python, it is clear that node js will always be the preferred
            option. 2. JavaScript is a simple programming language that can be
            used with any browser that has the JavaScript Engine installed.
            Node.js, on the other hand, is an interpreter or execution
            environment for the JavaScript programming language. It requires
            libraries that can be conveniently accessed from JavaScript
            programming to be more helpful. 3. Any engine may run JavaScript. As
            a result, writing JavaScript is incredibly easy, and any working
            environment is similar to a complete browser. Node.js, on the other
            hand, only enables the V8 engine. Written JavaScript code, on the
            other hand, can run in any context, regardless of whether the V8
            engine is supported. 4. A specific non-blocking operation is
            required to access any operating system. There are a few essential
            objects in JavaScript, but they are entirely OS-specific. Node.js,
            on the other hand, can now operate non-blocking software tasks out
            of any JavaScript programming.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Blog;
