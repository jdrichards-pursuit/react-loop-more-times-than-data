import Volunteer from "./Volunteer";

// I want a list that shows who has volunteered as well as how many more are needed. I want it rendered as the full list but I will populate the leftover needed volunteers with a string 'Volunteer Needed'

// .fetch response.json()....volunteerInfo
const volunteerInfo = {
  numVolunteersNeeded: 10,
  volunteerNames: [
    { name: "Carmen", id: "1" },
    { name: "Riley", id: "2" },
    { name: "Finley", id: "3" },
  ],
};

function Volunteers() {
  const { numVolunteersNeeded, volunteerNames } = volunteerInfo;

  const arr = [];

  for (let i = 0; i < numVolunteersNeeded; i++) {
    if (volunteerNames[i]) {
      const { id, name } = volunteerNames[i];
      arr.push(<Volunteer key={id} id={id} name={name} />);
    } else
      arr.push(
        <Volunteer key={i + 1} id={i + 1} name="Another Volunteer Needed" />
      );
  }

  return (
    <div className="Volunteers">
      <h1>Volunteer List</h1>
      <ol>{arr}</ol>
    </div>
  );
}

export default Volunteers;
