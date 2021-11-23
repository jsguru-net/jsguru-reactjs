const JSGuruCenterBox = (props) => {
  return (
    <div className="min-h-screen bg-no-repeat bg-cover bg-center">
      <div className="flex justify-end">
        <div className="bg-white min-h-screen lg:w-full w-full flex justify-center items-center">
          <div className="sm:w-1/2 md:w-1/3 px-5">{props.children}</div>
        </div>
      </div>
    </div>
  );
};

export default JSGuruCenterBox;
