import './App.scss';
import { JSGuruCenterBox } from './components';

const mock = {
  groups: [],
};
for (let id = 1; id <= 100; id++) {
  mock.groups.push({ id, name: `Group ${id}` });
}

function BookMarkForm(props) {
  const { groups } = props;
  return (
    <>
      <JSGuruCenterBox>
        <h2 class="text-2xl font-bold">Create new Bookmark</h2>
        <form>
          <div className="my-3">
            <input
              type="text"
              name="name"
              className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
              placeholder="Name"
            />
          </div>
          <div className="my-3">
            <input
              type="text"
              name="url"
              className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
              placeholder="URL"
            />
          </div>
          <div className="my-3">
            <select
              name="group"
              className="px-4 w-full border-2 py-2 rounded-md text-sm outline-none"
            >
              <option value="">Select bookmark group</option>
              {groups.map((g) => (
                <option value={g.id}>{g.name}</option>
              ))}
            </select>
          </div>
          <div className="my-3 text-center">
            <button class="mt-4 mb-3 xs:w-full w-1/3 bg-indigo-500 hover:bg-indigo-400 text-white py-2 rounded-md transition duration-100">
              Save
            </button>
          </div>
        </form>
      </JSGuruCenterBox>
    </>
  );
}

const App = () => (
  <>
    <BookMarkForm groups={mock.groups} />
  </>
);

export default App;
