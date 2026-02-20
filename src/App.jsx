import data from "./data.json";
function App() {
  return (
    <>
      <div>
        <header>
          <h1 className=" text-4xl text-center underline">
            C-DAC Noida Activities
          </h1>
        </header>
        <main>
          {data.map((section, index) => (
            <div key={index}>
              <h2 className="text-3xl font-bold mt-10 ml-5">{section.Name}</h2>
              <ul className="list-disc ml-6">
                {section.activities.map((activities, index) => (
                  <li key={index} className="ml-10 text-xl mt-4">
                    {activities}
                  </li>
                ))}
              </ul>
              <h3 className="mt-10 ml-5 text-3xl font-medium">
                Activities Discriptions
              </h3>
              <div className="mt-5">
                {section.activities_discription.map((discriptions, index) => (
                  <p key={index} className="text-xl ml-10 mt-3">
                    {discriptions}
                  </p>
                ))}
              </div>
              <hr className="mt-10 h-0.5 bg-black border-0" />
            </div>
          ))}
        </main>
      </div>
    </>
  );
}

export default App;
