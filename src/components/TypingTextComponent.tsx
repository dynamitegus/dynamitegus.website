import TypingText from "@/components/ui/shadcn-io/typing-text";

export default function TypingTextDemo() {
  return (
    <div className="flex items-center justify-center w-full">
      <TypingText
        text={[
          "A Software Developer",
          "An Engineer",
          "A Network Nerd",
          "A Web Developer",
          "A CFA Volunteer",
          "Some Guy",
          "stfu about telephony",
          "This is not funny.",
          "Some dude with a 3D printer",
          "Not Hatsune Miku",
        ]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        className="text-4xl font-mono text-center max-w-8xl"
        cursorClassName="h-12"
        textColors={["#dc8a78", "#dd7878", "#ea76cb", "#ff00ff", "#8839ef", "#d20f39", "#e64553", "#fe640b", "#df8e1d", "#40a02b", "#00ff00", "#179299", "#04a5e5", "#209fb5", "#1e66f5", "#7287fd"]}
        variableSpeed={{ min: 50, max: 120 }}
      />
    </div>
  );
}

