import React from "react";
import ReactLoading, { LoadingType } from "react-loading";
import "../styles/loading-style.css";

interface props {
  type: LoadingType;
  color: string;
}
const Loading: React.FC<props> = ({ type, color }) => {
  return (
    <div className="w-full min-h-screen bg-blue-300 flex flex-row items-center justify-center">
      <ReactLoading type={type} color={color} height={"10%"} width={"10%"} />
    </div>
  );
};

export default Loading;
