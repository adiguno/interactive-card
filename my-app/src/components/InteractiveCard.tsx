export function InteractiveCard() {
  return (
    <form className="container mx-auto">
      <label
        htmlFor="cardholder_name"
        className="block 
        mb-2 
        text-sm 
        font-medium 
        text-gray-900 
        dark:text-gray-300"
      >
        CARDHOLDER NAME
      </label>
      <input
        type="text"
        id="cardholder_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="e.g. John Swoe"
        required
      />

      <label
        htmlFor="card_number"
        className="block 
        mb-2 
        text-sm 
        font-medium 
        text-gray-900 
        dark:text-gray-300"
      >
        CARD NUMBER
      </label>
      <input
        type="tel"
        inputMode="numeric"
        id="cardholder_name"
        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        placeholder="e.g. 1234 1234 1234 1234"
        required
      />

      <div className="grid mx-auto mt-5 mb-5 gap-3 grid-cols-4 grid-rows-2">
        <label
          htmlFor="exp_date"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-2 "
        >
          EXP. DATE (MM/YY)
        </label>
        <label
          htmlFor="cvc"
          className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300 col-span-2 "
        >
          CVC
        </label>
        <input
          type="tel"
          inputMode="numeric"
          id="cardholder_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-1"
          placeholder="MM"
          required
        />
        <input
          type="tel"
          inputMode="numeric"
          id="exp_date"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-1"
          placeholder="YY"
          required
        />

        <input
          type="tel"
          inputMode="numeric"
          id="cardholder_name"
          className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 col-span-2"
          placeholder="e.g. 123"
          required
        />
      </div>
      <button
        type="submit"
        className="tesxt-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:text-white dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
      >
        Confirm
      </button>
    </form>
  );
}
