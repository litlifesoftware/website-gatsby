import React, { useState } from "react";

/**
 * Creates a CollapsibleCard.
 *
 * It displays either an expanded or a collapse card depending on the provided
 * props object. The card can then be expanded or collapsed by clicking on its
 * title text.
 * @param {Object} props
 */
function CollapsibleCard(props) {
  const [isHidden, setIsHidden] = useState(props.initallyHidden ?? true);

  /**
   * Toggles the isHidden state to expand or collapse the card.
   */
  function toggleHidden() {
    setIsHidden(!isHidden);
  }
  return (
    <>
      <div className="mr-auto ml-auto rounded-lg w-full md:w-6/12 py-2">
        <div
          onClick={toggleHidden}
          className={
            "bg-gray-800 text-white font-semibold hover:text-gray-700 focus:outline-none cursor-pointer" +
            (isHidden ? " rounded-lg" : " rounded-t-lg")
          }
          id="headingOne"
        >
          <h3 className="px-10 py-6 text-center">{props.title}</h3>
        </div>
        <div
          className={
            "text-left relative overflow-hidden" +
            " " +
            `${isHidden ? "max-h-0" : "h-full"}`
          }
          style={{ transition: "all .75s ease" }}
        >
          <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-8 shadow-lg rounded-b-lg">
            <div className="px-4 py-3 flex-auto mt-2 mb-4 text-gray-600">
              {props.body}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default CollapsibleCard;
