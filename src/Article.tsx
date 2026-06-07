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
        Nobody who still calls themselves a developer really wants to say this
        out loud, so I will. I barely write code anymore. I describe it, I read
        it, I argue with it. But the actual act of sitting down and producing
        the lines, character by character, the thing I spent a decade getting
        good at, is mostly gone now. The machine does that part. And I'm not
        saying this from some safe distance either. I mean me too.
      </p>

      <p>
        For a long time coding was an art, and I mean that almost literally. You
        had a blank file, a problem, and nothing in between except whatever was
        in your head. The satisfaction was physical. You bent a stubborn machine
        until it finally did the thing. You found the one clean abstraction that
        made twenty lines collapse into five. There was a small private pride in
        a function that read like a sentence. And most of the job, the real
        seventy percent of it, was the boring part. Where the semicolon goes.
        Why the pointer is null. Which lock you forgot. It was tedious, but that
        was also where the craft lived. You earned your taste by suffering
        through it. Nobody handed it to you.
      </p>

      <h2>The coder is the AI now</h2>

      <p>
        What changed isn't that we got better tools. We've always had better
        tools. Autocomplete, linters, frameworks. Those were levers. This is
        something else. The thing that writes the code now isn't a lever, it's a
        coder. It has opinions. It makes decisions I never made. It hands me a
        whole working module while I'm still finishing the sentence that
        describes what I want. So my job quietly moved up a level, and nobody
        really announced it.
      </p>

      <p>
        In 2022 I read every line as I typed it. In 2024 I read diffs I hadn't
        written. Now I read the diff and the intent behind it at the same time.
        Did the bug actually die. Is this the shape I meant. Is every line in
        here one I'd have put my name to. I used to pay attention one token at a
        time, then one function at a time, and now it's the whole thing at once.
        I stopped being the author and turned into the editor, the one who
        shapes the draft and decides if it ships, not the one typing it from a
        blank page. We became approvers. That's the honest word for what most of
        us do all day now. We approve.
      </p>

      <h2>The quiet cost of approving</h2>

      <p>
        The part I didn't expect is that doing this well is harder than writing
        ever was. My day has two halves now. First I describe the change,
        precisely enough that the model can't quietly round my intent off into
        something close but wrong. Then I read everything it gives me back, the
        whole diff, line by line, the way I'd review a pull request from someone
        I don't fully trust yet. Nothing becomes a commit until I've actually
        understood it. That sounds like the bare minimum, and it is, but there's
        a pull working against it the whole time. The diff looks fine, the tests
        are green, and the cheapest thing in the world is to just wave it
        through. All the time I saved by not writing came straight back as the
        work of not approving on faith. That's the whole job now. Keep reading
        every line and you're still an engineer. Let the green checkmark do your
        thinking for you and you're a rubber stamp with a salary, and the
        machine is happy to work with either one.
      </p>

      <p>
        And the apprenticeship is dying. The way you used to get good was by
        writing bad code and sitting with it long enough to feel why it was bad.
        The juniors coming up now get a fast, confident answer before they ever
        sit with the mistake. They skip the suffering that used to build
        judgment. I don't know yet what that produces. Maybe a generation that's
        faster than us and never learned the thing we only learned by accident.
        Maybe it's fine. I honestly don't know, and anyone who tells you they do
        is selling something. But I have a quiet feeling that the people in the
        room right now are the last ones who will ever have written their own
        code. The last ones for whom the lines were something you typed, not
        something you were handed.
      </p>

      <h2>What's left is the part that was always the point</h2>

      <p>
        I'm not writing this as a eulogy though. The seventy percent the machine
        took was never the part I loved most. It was the toll I paid to get to
        the part I did love. What's left is the thirty percent that was always
        the real skill. Deciding what's even worth building. Framing a problem
        so it has a clean answer. Having the taste to see that a working
        solution is still the wrong one. The machine is an incredible coder and
        a pretty mediocre engineer, because engineering was never really about
        the code. It was about judgment, and judgment doesn't compress.
      </p>

      <p>
        So we're approvers now. Fine. The question I keep coming back to,
        usually right when I close the laptop, is whether approval can become a
        craft the way coding was. Whether you can actually be good at judgment.
        Knowing what to accept and what to send back. Holding a system in your
        head well enough to catch the one thing the machine got confidently
        wrong. I think you can. I think that's the whole game now. It's just a
        different game, and I won't pretend I don't miss the old one a little.
        The blank file. The stubborn machine. The long quiet hours when it was
        just me and the problem, writing every line myself.
      </p>
    </section>
  );
}

export default Article;
