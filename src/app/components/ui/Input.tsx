import TextareaAutosize from "react-textarea-autosize";

const Input = ({ input, setInput, sendMessage }: any) => (
  <div className="flex">
    <TextareaAutosize
      autoFocus
      minRows={6}
      placeholder="Start typing... (Press return to submit)"
      aria-label="chat input"
      required
      className="w-full bg-slate-50 px-6 py-12"
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

export default Input;
