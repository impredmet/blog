import { Link } from "react-router-dom";

function Article() {
  return (
    <section className="article">
      <p className="back">
        <Link to="/">← back</Link>
      </p>

      <h1>The Last People Who Wrote Their Own Code</h1>
      <p className="byline">Predmet · 2026</p>

      <p>
        I'll say the thing out loud, because nobody who still calls themselves a
        developer wants to: I barely write code anymore. I describe it. I read
        it. I argue with it. But the act of sitting down and producing the
        lines, character by character — the thing I spent a decade getting good
        at — is mostly gone. The machine does that now. And I'm not pointing at
        anyone from a safe distance here. I mean me too.
      </p>

      <p>
        For a long time, coding was an art, and I mean that almost literally.
        You had a blank file, a problem, and nothing in between except what was
        in your head. The satisfaction was physical: bending a stubborn machine
        until it finally did the thing, finding the one clean abstraction that
        made twenty lines collapse into five, the small private pride of a
        function that read like a sentence. Most of the job — the real seventy
        percent of it — was the nitty-gritty. Where the semicolon goes. Why the
        pointer is null. Which lock you forgot. It was tedious, but it was also
        where the craft lived. You earned your taste by suffering through it.
        Nobody handed it to you.
      </p>

      <h2>The coder is the AI now</h2>

      <p>
        What changed isn't that we got better tools. We've always had better
        tools — autocomplete, linters, frameworks. Those were levers. This is
        different. The thing that writes the code now is not a lever; it's a
        coder. It has opinions. It makes decisions I never made. It produces a
        whole working module while I'm still finishing the sentence that
        describes what I want. And so my job quietly moved up a level, without
        anyone announcing it.
      </p>

      <p>
        In 2022 I read every line as I typed it. In 2024 I read diffs I hadn't
        written. Now I read the diff and the intent behind it at once — did the
        bug actually die, is this the shape I meant, is every line in here one
        I'd have put my name to. The unit of attention used to be a token, then
        a function; now it's the whole intention, held in one hand. I've stopped
        being the author and become the editor — the one who shapes the draft
        and decides whether it ships, not the one who types it from a blank
        page. We turned into approvers. That's the honest word for what most of
        us do all day now. We approve.
      </p>

      <h2>The quiet cost of approving</h2>

      <p>
        Here's what I didn't expect: doing it well is harder than writing ever
        was. My day has two acts now. First I describe the change — precisely
        enough that the model can't quietly round my intent off to something
        adjacent. Then I read everything it hands back, the whole diff, line by
        line, the way I'd review a pull request from someone I don't yet trust.
        Nothing becomes a commit until I've actually understood it. That sounds
        like the bare minimum, and it is — but there's a current running against
        it the entire time. The diff looks plausible, the tests are green, and
        the cheapest thing in the world is to wave it through. The writing time
        collapsed to nothing, and every minute of it came back as the discipline
        of not approving on faith. That discipline is the entire job now. Keep
        reading every line and you stay an engineer; let the green checkmark do
        your thinking and you become a rubber stamp with a salary — and the
        machine is glad to work with either one.
      </p>

      <p>
        And the apprenticeship is dying. The way you used to become good was by
        writing bad code and sitting with it long enough to feel why it was bad.
        The juniors coming up now get a fast, confident answer before they ever
        sit with the mistake. They skip the suffering that used to manufacture
        judgment. I don't know yet what that produces. Maybe a generation that's
        faster than us and never learned the thing we learned by accident. Maybe
        it's fine. I'm genuinely not sure, and anyone who tells you they are is
        selling something. But I have a quiet suspicion that the people in the
        room right now are the last who will ever have written their own code —
        the last for whom the lines were something you typed, not something you
        received.
      </p>

      <h2>What's left is the part that was always the point</h2>

      <p>
        I don't write this as a eulogy. The seventy percent the machine took was
        never the part I loved most — it was the toll I paid to reach the part I
        did. What's left is the thirty percent that was always the mastery:
        deciding what is even worth building, framing a problem so it has a
        clean answer, having the taste to see that a working solution is still
        the wrong one. The machine is an astonishing coder and a mediocre
        engineer, because engineering was never mostly about the code. It was
        about judgment, and judgment doesn't compress.
      </p>

      <p>
        So we're approvers now. Fine. The open question — the one I think about
        when I close the laptop — is whether approval can become a craft the way
        coding was. Whether you can be an artist of judgment: knowing what to
        accept and what to send back, holding a system in your head well enough
        to catch the one thing the machine got confidently wrong. I think you
        can. I think that's the whole game now. But it's a different game, and I
        won't pretend I don't miss the old one a little — the blank file, the
        stubborn machine, and the long quiet hours when it was just me and the
        problem, writing every line myself.
      </p>
    </section>
  );
}

export default Article;
