import BaseTemplateTeacher from "../components/BaseTemplateTeacher";

function TeacherReport() {
  return (
    <BaseTemplateTeacher>
      <section className="m-16  col-span-2">
        <div className="text-3xl ">Create Submission</div>
        <form className="flex flex-col mt-10" action="">
          <div class="mb-6 flex items-center">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Assigning to:
            </label>
            <select name="" className="mx-2 p-2" id="">
              <option value="v1">5D</option>
              <option value="v1">5C</option>
              <option value="v1">5N</option>
            </select>
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title of the Submission"
              required
            ></input>
          </div>
          <div class="mb-6">
            <label
              for="description"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Description
            </label>
            <textarea
              type="text"
              id="description"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              required
            ></textarea>
          </div>
          <button className="p-5 bg-gray-800 rounded-lg font-bold text-yellow-200 ">
            SUBMIT
          </button>
        </form>
      </section>
      <section className="m-16  col-span-2">
        <div className="text-3xl ">Create Notification</div>
        <form className="flex flex-col mt-10" action="">
          <div className="flex justify-between">
            <div class="mb-6 flex items-center">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Priority:
              </label>
              <select name="" className="mx-2 p-2" id="">
                <option value="v1">High</option>
                <option value="v1">Low</option>
                <option value="v1">Med</option>
              </select>
            </div>
            <div class="mb-6 flex items-center">
              <label
                for="email"
                class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
              >
                Assigning to:
              </label>
              <select name="" className="mx-2 p-2" id="">
                <option value="v1">5D</option>
                <option value="v1">5E</option>
                <option value="v1">3D</option>
              </select>
            </div>
          </div>
          <div class="mb-6">
            <label
              for="email"
              class="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300"
            >
              Title
            </label>
            <input
              type="email"
              id="email"
              class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Title of the Submission"
              required
            ></input>
          </div>

          <button className="p-5 bg-gray-800 rounded-lg font-bold text-yellow-200 ">
            SUBMIT
          </button>
        </form>
      </section>
    </BaseTemplateTeacher>
  );
}
export default TeacherReport;
