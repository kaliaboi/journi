import TextareaAutosize from "react-textarea-autosize";

const Input = ({ input, setInput, sendMessage, disabled }: any) => {
  return (
    <div className="flex py-[18px]">
      <TextareaAutosize
        autoFocus={!disabled}
        disabled={disabled}
        minRows={6}
        placeholder="Start typing... (Press return to submit)"
        aria-label="chat input"
        required
        className="w-full bg-slate-50 px-[18px] appearance-none rounded-md border border-slate-50 focus:border-slate-50 focus:outline-none focus:ring-4 focus:ring-slate-50"
        value={input}
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            sendMessage(input);
            setInput("");
          }
        }}
        onChange={(e) => {
          setInput(e.target.value);
        }}
      />
    </div>
  );
};

export default Input;
