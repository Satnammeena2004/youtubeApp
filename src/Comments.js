import {useEffect, useState} from "react";
import Logo from "./logo.png";
import {YOUTUBE_API_KEY} from "./constant";

const comment = [
  {
    author: "Satnam",
    message: "Hello world ",
    replies: [
      {
        author: "Satnam",
        message: "Hello world ",
        replies: [
          {
            author: "Satnam",
            message: "Hello world ",
            replies: [
              {
                author: "Satnam",
                message: "Hello world ",
                replies: [],
              },
            ],
          },
          {
            author: "Satnam",
            message: "Hello world ",
            replies: [],
          },
        ],
      },
    ],
  },
  {
    author: "Satnam",
    message: "Hello world ",
    replies: [
      {
        author: "Satnam",
        message: "Hello world ",
        replies: [
          {
            author: "Satnam",
            message: "Hello world ",
            replies: [
              {
                author: "Satnam",
                message: "Hello world ",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        author: "Satnam",
        message: "Hello world ",
        replies: [
          {
            author: "Satnam",
            message: "Hello world ",
            replies: [
              {
                author: "Satnam",
                message: "Hello world ",
                replies: [
                  {
                    author: "Satnam",
                    message: "Hello world ",
                    replies: [
                      {
                        author: "Satnam",
                        message: "Hello world ",
                        replies: [
                          {
                            author: "Satnam",
                            message: "Hello world ",
                            replies: [
                              {
                                author: "Satnam",
                                message: "Hello world ",
                                replies: [
                                  {
                                    author: "Satnam",
                                    message: "Hello world ",
                                    replies: [],
                                  },
                                ],
                              },
                            ],
                          },
                        ],
                      },
                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
      {
        author: "Satnam",
        message: "Hello world ",
        replies: [
          {
            author: "Satnam",
            message: "Hello world ",
            replies: [
              {
                author: "Satnam",
                message: "Hello world ",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        author: "Satnam",
        message: "Hello world ",
        replies: [
          {
            author: "Satnam",
            message: "Hello world ",
            replies: [
              {
                author: "Satnam",
                message: "Hello world ",
                replies: [],
              },
            ],
          },
        ],
      },
      {
        author: "Satnam",
        message: "Hello world ",
        replies: [],
      },
    ],
  },
  {
    author: "Umesh",
    message: "Kha hai BRo!11",
    replies: [],
  },
];

function Comment({author, message, replies}) {
  const [show, setShow] = useState(false);

  useEffect(() => {
    async function getComments() {
      const res = await fetch(
        "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&maxResults=25&videoId=U9sDK8zTJ8Y&key=" +
          YOUTUBE_API_KEY
      );
   const json = await res.json();
   console.log(json);

    }
    getComments()
  });

  return (
    <div className=" border-2 shadow-xl rounded-lg p-2 my-1 ">
      <div className="flex items-center p-1 my-2 shadow-md rounded-sm">
        <span className="w-8 h-8 rounded-full  inline-block ml-2 ">
          <img src={Logo} alt="react" />
        </span>
        <span className="mx-2 font-bold">{author}</span>
        <span className="text-sm">{message}</span>

        {replies.length !== 0 && (
          <>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block ml-2 "></span>
            <button
              className="border-2 rounded-md  p-0.5 px-2 mx-2 bg-gray-500 text-neutral-100 text-xs"
              onClick={() => setShow(!show)}
            >
              replies {replies.length}
            </button>
          </>
        )}
      </div>
      {show && (
        <div className="pl-2">
          {replies.map((r, i) => (
            <Comment
              key={i}
              author={r.author}
              message={r.message}
              replies={r.replies}
            />
          ))}
        </div>
      )}
    </div>
  );
}

function CommentList() {
  return (
    <>
      {comment.map((c, i) => (
        <Comment key={i} {...c} />
      ))}
    </>
  );
}

function Comments() {
  return (
    <div className="w-full">
      <h1 className="p-1 text-center font-bold text-2xl ">Comments:</h1>

      <CommentList />
    </div>
  );
}

export default Comments;
