function MiniProfile() {
  return (
    <div className={"flex items-center justify-between mt-14 ml-10"}>
      <img
        className={"w-16 h-16 object-cover rounded-full border p-[2px]"}
        alt=""
        src="https://img.freepik.com/free-photo/surprised-happy-bearded-man-shirt-pointing-away_171337-5021.jpg?size=338&ext=jpg"
      />
      <div className={"flex-1 mx-4"}>
        <h2 className={"font-bold"}>Muhamad Ridho</h2>
        <h3 className={"text-sm text-gray-400"}>Welcome to Instagram</h3>
      </div>
      <button className={"text-blue-400 text-sm font-semibold"}>
        Sign Out
      </button>
    </div>
  );
}

export default MiniProfile;