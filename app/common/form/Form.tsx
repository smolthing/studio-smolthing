export function Form({
  action,
  children,
}: {
  action: any;
  children: React.ReactNode;
}) {
  return (
    <form
      action={action}
      className="flex flex-col space-y-2 bg-gray-50 sm:px-16 mt-6 mb-6"
    >
      <div>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          autoComplete="email"
          required
          className="block w-full appearance-none border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      <div>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Password"
          required
          className="block w-full mb-2 appearance-none border border-gray-300 px-5 py-3 placeholder-gray-400 shadow-sm focus:border-black focus:outline-none focus:ring-black sm:text-sm"
        />
      </div>
      {children}
    </form>
  );
}
