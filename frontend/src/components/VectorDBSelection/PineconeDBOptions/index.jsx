export default function PineconeDBOptions({ settings }) {
  return (
    <div className="w-full flex flex-col gap-y-4">
      <div className="w-full flex items-center gap-4">
        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            Pinecone DB API Key
          </label>
          <input
            type="password"
            name="PineConeKey"
            className="border-none bg-zinc-900 text-white placeholder-white placeholder-opacity-60 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder="Pinecone API Key"
            defaultValue={settings?.PineConeKey ? "*".repeat(20) : ""}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            Pinecone Index Environment
          </label>
          <input
            type="text"
            name="PineConeEnvironment"
            className="border-none bg-zinc-900 text-white placeholder-white placeholder-opacity-60 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder="us-gcp-west-1"
            defaultValue={settings?.PineConeEnvironment}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>

        <div className="flex flex-col w-60">
          <label className="text-white text-sm font-semibold block mb-4">
            Pinecone Index Name
          </label>
          <input
            type="text"
            name="PineConeIndex"
            className="border-none bg-zinc-900 text-white placeholder-white placeholder-opacity-60 text-sm rounded-lg focus:border-white block w-full p-2.5"
            placeholder="my-index"
            defaultValue={settings?.PineConeIndex}
            required={true}
            autoComplete="off"
            spellCheck={false}
          />
        </div>
      </div>
    </div>
  );
}
