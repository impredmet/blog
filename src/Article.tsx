import { Link } from "react-router-dom";

function Article() {
  return (
    <section className="article">
      <p className="back">
        <Link to="/">← back</Link>
      </p>

      <h1>The Last People Who Wrote Their Own Code</h1>
      <p className="byline">Predmet, 2026</p>

      <p>
        Nobody who still calls themselves a developer wants to say this out
        loud, so I will. I barely write code anymore. I describe it, I read it,
        I argue with it. But actually sitting down and writing the lines myself,
        character by character, the thing I spent ten years getting good at, is
        mostly gone now. The machine does that part. And I'm not saying this
        from far away, like it only happens to other people. I mean me too.
      </p>

      <p>
        For a long time, coding was an art. I mean that almost for real. You had
        an empty file, a problem, and nothing in between except what was in your
        head. The feeling was physical. You pushed a stubborn machine until it
        finally did what you wanted. You found the one clean way to turn twenty
        lines into five. There was a small, quiet pride in a function that read
        like a normal sentence. And most of the job, maybe seventy percent of
        it, was the boring part. Where the semicolon goes. Why the value is
        null. Which lock you forgot. It was annoying, but that is also where the
        skill came from. You earned your taste by suffering through it. Nobody
        gave it to you.
      </p>

      <h2>The AI is the coder now</h2>

      <p>
        What changed is not that we got better tools. We always had better
        tools. Autocomplete, linters, frameworks. Those were just helpers. This
        is different. The thing that writes the code now is not a helper, it's a
        coder. It has its own opinions. It makes choices I never made. It gives
        me a full, working piece of code while I'm still finishing the sentence
        that explains what I want. So my job slowly moved up one level, and
        nobody really told me it happened.
      </p>

      <p>
        In 2022 I read every line as I wrote it. In 2024 I read changes I didn't
        write. Now I read the change and the idea behind it at the same time.
        Did the bug really die. Is this what I actually meant. Is every line
        here something I would sign my name to. Before, I looked at one word at
        a time, then one function at a time. Now I look at the whole thing at
        once. I'm not the writer anymore, I'm the editor. The one who shapes the
        draft and decides if it ships, not the one writing it from an empty
        page. We became approvers. That is the honest word for what most of us
        do all day now. We approve.
      </p>

      <h2>The quiet cost of approving</h2>

      <p>
        The thing I didn't expect is that doing this well is harder than writing
        ever was. My day has two parts now. First I explain the change clearly
        enough that the AI can't turn my idea into something close but wrong.
        Then I read everything it gives back, the whole change, line by line,
        the same way I would review a pull request from someone I don't fully
        trust yet. Nothing becomes a commit until I really understand it. That
        sounds like the minimum, and it is, but there is something pulling
        against it the whole time. The code looks fine, the tests are green, and
        the easiest thing in the world is to just accept it. All the time I
        saved by not writing came right back as the work of not approving
        blindly. That is the real job now. If you keep reading every line,
        you're still an engineer. If you let the green checkmark think for you,
        you're just a rubber stamp with a salary, and the AI is fine working
        with either one.
      </p>

      <p>
        And the way we used to learn is dying. You got good by writing bad code
        and sitting with it long enough to understand why it was bad. The
        juniors today get a fast, confident answer before they ever sit with
        their mistake. They skip the pain that used to build judgment. I don't
        know yet what that creates. Maybe people who are faster than us but
        never learned the thing we only learned by accident. Maybe it's fine. I
        really don't know, and anyone who says they do is selling you something.
        But I have a quiet feeling that the people working right now are the
        last ones who will ever have written their own code. The last ones for
        whom the lines were something you typed, not something you were given.
      </p>

      <h2>What's left is the part that always mattered</h2>

      <p>
        I'm not writing this to say goodbye to coding, though. The seventy
        percent the machine took was never the part I loved most anyway. It was
        just the price I paid to reach the part I did love. What's left is the
        thirty percent that was always the real skill. Deciding what is even
        worth building. Describing a problem clearly enough that it has a clean
        answer. Having the taste to see that a working solution is still the
        wrong one. The AI is an amazing coder and a pretty average engineer,
        because engineering was never really about the code. It was about
        judgment, and you can't automate judgment.
      </p>

      <p>
        So we're approvers now. Fine. The question I keep thinking about,
        usually right when I close my laptop, is whether approving can become a
        real skill the way coding was. Whether you can actually be good at
        judgment. Knowing what to accept and what to send back. Understanding a
        system well enough to catch the one thing the AI got confidently wrong.
        I think you can. I think that is the whole game now. It's just a
        different game, and I won't pretend I don't miss the old one a little.
        The empty file. The stubborn machine. The long quiet hours when it was
        just me and the problem, writing every line myself.
      </p>
    </section>
  );
}

export default Article;
