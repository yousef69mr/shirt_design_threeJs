import React from "react";

import CustomButton from "./CustomButton";

const AIPicker = (props) => {
  const { prompt, setPrompt, generatingImg, handleSubmit } = props;
  return (
    <div className="aipicker-container">
      <textarea
        placeholder="Ask AI...."
        className="aipicker-textarea"
        value={prompt}
        rows={5}
        onChange={(e) => setPrompt(e.target.value)}
      ></textarea>
      <div className="flex flex-wrap gap-3">
        {generatingImg ? (
          <CustomButton
            title={"Ask AI"}
            type={"outline"}
            customStyles={"text-xs"}
          />
        ) : (
          <React.Fragment>
            <CustomButton
              title={"AI Logo"}
              type={"outline"}
              handleClick={() => handleSubmit("logo")}
              customStyles={"text-xs"}
            />
            <CustomButton
              title={"AI Full"}
              type={"filled"}
              handleClick={() => handleSubmit("full")}
              customStyles={"text-xs"}
            />
          </React.Fragment>
        )}
      </div>
    </div>
  );
};

export default AIPicker;
