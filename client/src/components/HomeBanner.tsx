export default function HomeBanner() {
  return (
    <div className="h-screen w-screen relative">
      <img
        className="w-full h-full"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/f272782d-cf96-4988-a675-6db2afd165e0/web/GB-en-20241008-TRIFECTA-perspective_99774f7d-1fe4-4b12-9998-e0be09b42181_large.jpg"
        alt=""
      />
      <div className="absolute h-full w-full bg-black bg-opacity-40 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-white font-bold text-5xl">
            Unlimited films, TV programmes and more
          </h1>
          <p className="text-white text-3xl mt-3">
            Watch anywhere, Cancel anytime
          </p>
          <div className="mt-8">
            <a
              href="/login"
              className="bg-red-700 mt-8 text-white p-4 px-16 text-lg rounded font-semibold"
            >
              Sign up
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
