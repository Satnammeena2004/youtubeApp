import {useState} from "react";
import Logo from "./logo.png";
import {useGetCommentsByIdQuery} from "./utils/fetchComments";
import {useSearchParams} from "react-router-dom";

// const comment = [
//   {
//     author: "Satnam",
//     message: "Hello world ",
//     replies: [
//       {
//         author: "Satnam",
//         message: "Hello world ",
//         replies: [
//           {
//             author: "Satnam",
//             message: "Hello world ",
//             replies: [
//               {
//                 author: "Satnam",
//                 message: "Hello world ",
//                 replies: [],
//               },
//             ],
//           },
//           {
//             author: "Satnam",
//             message: "Hello world ",
//             replies: [],
//           },
//         ],
//       },
//     ],
//   },
//   {
//     author: "Satnam",
//     message: "Hello world ",
//     replies: [
//       {
//         author: "Satnam",
//         message: "Hello world ",
//         replies: [
//           {
//             author: "Satnam",
//             message: "Hello world ",
//             replies: [
//               {
//                 author: "Satnam",
//                 message: "Hello world ",
//                 replies: [],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         author: "Satnam",
//         message: "Hello world ",
//         replies: [
//           {
//             author: "Satnam",
//             message: "Hello world ",
//             replies: [
//               {
//                 author: "Satnam",
//                 message: "Hello world ",
//                 replies: [
//                   {
//                     author: "Satnam",
//                     message: "Hello world ",
//                     replies: [
//                       {
//                         author: "Satnam",
//                         message: "Hello world ",
//                         replies: [
//                           {
//                             author: "Satnam",
//                             message: "Hello world ",
//                             replies: [
//                               {
//                                 author: "Satnam",
//                                 message: "Hello world ",
//                                 replies: [
//                                   {
//                                     author: "Satnam",
//                                     message: "Hello world ",
//                                     replies: [],
//                                   },
//                                 ],
//                               },
//                             ],
//                           },
//                         ],
//                       },
//                     ],
//                   },
//                 ],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         author: "Satnam",
//         message: "Hello world ",
//         replies: [
//           {
//             author: "Satnam",
//             message: "Hello world ",
//             replies: [
//               {
//                 author: "Satnam",
//                 message: "Hello world ",
//                 replies: [],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         author: "Satnam",
//         message: "Hello world ",
//         replies: [
//           {
//             author: "Satnam",
//             message: "Hello world ",
//             replies: [
//               {
//                 author: "Satnam",
//                 message: "Hello world ",
//                 replies: [],
//               },
//             ],
//           },
//         ],
//       },
//       {
//         author: "Satnam",
//         message: "Hello world ",
//         replies: [],
//       },
//     ],
//   },
//   {
//     author: "Umesh",
//     message: "Kha hai BRo!11",
//     replies: [],
//   },
// ];

function Replies({comment}) {
  const [showComments, setShowComments] = useState(true);
  const {authorDisplayName, authorProfileImageUrl, textOriginal} =
    comment?.snippet;
  return (
    <div className="w-80 h-full  my-1 rounded-lg shadow-lg p-2">
      <div className="flex ">
        <img
          className="w-4 h-4 rounded-full m-2"
          src={authorProfileImageUrl}
          alt="..."
        />
        <span className="font-bold">{authorDisplayName}</span>
      </div>
      <p>
        {textOriginal
          .slice(0, showComments ? 20 : textOriginal.length)
          .split("\n")
          .map((p) => (
            <p>{p}..</p>
          ))}
        <button
          className="shadow-lg mx-2 border-1 border-gray-400 text-xs  px-2 rounded-lg "
          onClick={() => setShowComments(!showComments)}
        >
          More
        </button>
      </p>{" "}
    </div>
  );
}

function Comment2({comment}) {
  const [showComments, setShowComments] = useState(true);

  const [isReplies, setIsReplies] = useState(false);
  const {replies} = comment;
  const {
    authorDisplayName,
    authorProfileImageUrl,
    likeCount,
    publishedAt,
    textOriginal,
  } = comment?.snippet?.topLevelComment?.snippet;

  function dateDiff(a) {
    const date1 = new Date();
    const date2 = new Date(a);
    const diffTime = Math.abs(date2 - date1);
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

    return diffDays;
  }

  return (
    <div className="w-full   p-2 my-1 rounded-lg    h-full">
      <div className="flex gap-1 w-full">
        {" "}
        <img
          className="w-10 h-10 rounded-full m-2"
          src={authorProfileImageUrl}
          alt="..."
        />
        <div className="">
          <div>
            <span className="font-bold text-sm">{authorDisplayName}</span>
            <span className="text-xs mx-3 my-1">
              {dateDiff(publishedAt) + "days ago"}
            </span>
          </div>
          <p className="text-sm">
            {textOriginal
              .slice(0, showComments ? 20 : textOriginal.length)
              .split("\n")
              .map((p) => (
                <p>
                  {p}{" "}
                  <button
                    className="shadow-lg mx-2 border-1 border-gray-400 text-xs  px-2 rounded-lg "
                    onClick={() => setShowComments(!showComments)}
                  >
                    More
                  </button>
                  {}{" "}
                </p>
              ))}
            <button
              className=" mx-2 border-1 border-gray-400 text-xs  px-2 rounded-lg "
              onClick={() => setShowComments(!showComments)}
            >
              {likeCount > 0 && "👍🏻" + likeCount}
            </button>
          </p>
        </div>
      </div>
      <div>
        {isReplies &&
          replies?.comments?.map((reply, i) => (
            <Replies key={reply?.id} comment={reply} />
          ))}
        {!isReplies && replies?.comments?.length > 0 && (
          <>
            <span className="w-1.5 h-1.5 bg-green-500 rounded-full inline-block ml-2 "></span>
            <button
              className="border-2 rounded-md  p-0.5 px-2 mx-2 bg-gray-500 text-neutral-100 text-xs"
              onClick={() => setIsReplies(true)}
            >
              replies {replies?.comments?.length}
            </button>
          </>
        )}
      </div>
    </div>
  );
}

function Comment({author, message, replies}) {
  const [show, setShow] = useState(false);

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

function CommentList({queryId}) {
  const {data, isLoading, error} = useGetCommentsByIdQuery(queryId);



  if (error) {
    console.log(error);
    return;
  }
  if (isLoading) {
    return <h1>No Coments PLease!</h1>;
  }

  console.log("data", data.items);
  return (
    <>
      <h1>Comment List</h1>
      <div>
        {data?.items?.map((comment) => (
          <Comment2 key={comment.id} comment={comment} />
        ))}
      </div>
    </>
  );
}

function Comments() {
  const [searchParam] = useSearchParams();
  console.log(searchParam.get("v"));
  return (
    <div className="w-full">
      <h1 className="p-1 text-center font-bold text-2xl ">Comments:</h1>

      <CommentList queryId={searchParam.get("v")} />
    </div>
  );
}

export default Comments;
