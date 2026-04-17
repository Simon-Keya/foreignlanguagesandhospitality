type Props = {
    facilities?: string[];
  };
  
  export default function FacilitiesList({ facilities }: Props) {
    if (!facilities || facilities.length === 0) {
      return null;
    }
  
    return (
      <div className="mt-6">
        <h3 className="text-xl font-semibold mb-3">Facilities & Resources</h3>
  
        <ul className="grid sm:grid-cols-2 gap-2">
          {facilities.map((facility, index) => (
            <li
              key={index}
              className="bg-base-200 px-4 py-2 rounded-lg text-sm"
            >
              ✔ {facility}
            </li>
          ))}
        </ul>
      </div>
    );
  }