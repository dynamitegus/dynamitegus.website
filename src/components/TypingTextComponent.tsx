import TypingText from '@/components/ui/shadcn-io/typing-text';

export default function TypingTextDemo() {
  return (
    <div className="flex items-center justify-center w-full">
      <TypingText 
        text={["A Software Developer", "An Engineer", "A Network Nerd", "A Web Developer", "A CFA Volunteer", "some guy", "stfu about telephony", "this is not funny", "why did you give me a business card", "some dude with a 3d printer"]}
        typingSpeed={75}
        pauseDuration={1500}
        showCursor={true}
        className="text-4xl font-bold text-center max-w-8xl"
        cursorClassName="h-12"
        textColors={['#3b82f6', '#8b5cf6', '#06b6d4']}
        variableSpeed={{ min: 50, max: 120 }}
      />
    </div>
  );
}