# Fancy Cat Command

## Section 1 — Command Description

This tool, `fancyCat.js`, is a simplified re-implementation of the Linux
`cat` and `wc` commands combined into one tool.

**What it does:** Reads a file and displays its full contents, then shows
the total line count.

**How to run it:**
Example: `node fancyCat.js sample.txt`

**Commands combined:** `cat` (display file contents) + `wc` (count lines)

## Section 2 — AI-Assisted Programming

**What I asked AI:** I asked for help understanding what `cat` and `wc` do,
and how to combine their functionality into a single Node.js script using
only synchronous `fs` methods and `process.argv`.

**Where AI helped:** AI helped me understand the structure of a Node.js
script (reading a file, splitting it into lines, handling errors with
try/catch) and suggested test cases to check my tool's edge cases.

**Where I had to think independently:** I had to actually create the files
in Codio, run the terminal commands myself, fix a typo in my code
(`readfileSync` vs `readFileSync`), and rename my file correctly.

**What AI got wrong or missed:** AI initially suggested a filename that
didn't match what I had already created, so I had to run `ls` myself to
confirm the actual file name in my workspace before rerunning the commands.
