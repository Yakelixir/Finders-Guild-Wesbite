import { RoleDetail, RoleId, MediaAsset } from "../types/foundingFirm";

export const ROLES_DATA: Record<RoleId, RoleDetail> = {
  trader: {
    id: "trader",
    cardHeadline: "I TRADE / OPERATE A DESK",
    roleTitle: "Experienced Trader / Desk Operator",
    invitationRelevance:
      "We invited you because trading desks live and die by closing judgment, market reality, and the ability to kill bad deals before they consume operational bandwidth.",
    pain: [
      "You have probably seen more deals than you need.",
      "The problem is the amount of your judgment consumed determining which ones should never have reached you.",
    ],
    claim:
      "We are building the filtering, relationship protection, evidence organization, and operating discipline around the trader so experienced judgment gets applied where it matters.",
    gain:
      "Spend more time evaluating transactions that deserve professional attention and less time reconstructing broken broker chains.",
    whatWeNeed: [
      "What should reach a professional desk?",
      "What should die earlier?",
      "What procedures actually survive contact with the market?",
    ],
    ndaRelevance:
      "This matters because unnecessary legal/process friction can prevent good transactions from ever reaching your desk.",
    frictionRelevance:
      "This matters because software cannot replace the physical execution reality, terminal inspection, and closing discipline of an experienced trader.",
    questionGuidance: {
      q1: "Think about the commodity or asset classes where your execution judgment and terminal/market experience create undeniable closing certainty.",
      q2: "Consider what desk discipline or pricing/procedural filter you bring that prevents months of wasted motion.",
      q3: "What verification standards, proof of product, or trade room boundaries do you require before looking at an opportunity?",
      q4: "What desk split, origination carry, or entity structure would make dedicating your closing bandwidth worthwhile?",
      q5: "What operational red flags (e.g. unverified LOIs, phantom refineries) would make you immediately walk away?",
    },
  },
  originator: {
    id: "originator",
    cardHeadline: "I ORIGINATE OPPORTUNITIES",
    roleTitle: "Originator / Representative",
    invitationRelevance:
      "We invited you because you hold trusted principal relationships and know that real access requires boundary protection, not indiscriminate forwarding.",
    pain: [
      "Your relationships are valuable precisely because you cannot expose them indiscriminately.",
      "One bad introduction can cost more than one missed commission.",
    ],
    claim:
      "We are designing the process around attribution, controlled exposure, qualification, and agreed economics before valuable relationships are unnecessarily opened.",
    gain:
      "Your network can become more economically useful without becoming inventory for everyone else.",
    whatWeNeed: [
      "What makes you comfortable exposing a relationship?",
      "What protections actually matter?",
      "What should an originator earn when value compounds beyond the first introduction?",
    ],
    ndaRelevance:
      "This matters because relationship protection has to protect you without making every introduction impossible.",
    frictionRelevance:
      "This matters because originators carry personal trust that software cannot manufacture—and boundary setting is how you protect that trust.",
    questionGuidance: {
      q1: "Where have your principal and mandate relationships repeatedly produced durable, trusted commercial value?",
      q2: "What sovereign, industrial, or institutional access do you hold that requires absolute discretion and attribution?",
      q3: "What non-circumvention shields and counterparty screening must be in place before you introduce a trusted buyer or seller?",
      q4: "How should long-term fee participation and compounding attribution be structured when an introduced relationship does repeat business?",
      q5: "What would make you say no—such as unauthorized broker re-brokering or lack of fee transparency?",
    },
  },
  capital: {
    id: "capital",
    cardHeadline: "I CONTROL OR DEPLOY CAPITAL",
    roleTitle: "Capital / Trade Finance",
    invitationRelevance:
      "We invited you because capital belongs where risk is accurately underwritten, authority is real, and evidence has already survived rigorous early filters.",
    pain: [
      "Capital is frequently introduced too early, against incomplete information, unclear authority, or structures that have not earned serious underwriting attention.",
    ],
    claim:
      "We want opportunities to reach capital with clearer participants, evidence, authority, transaction structure, missing requirements, and decision history.",
    gain:
      "Capital spends less time underwriting noise and more time evaluating situations that have survived earlier filters.",
    whatWeNeed: [
      "What must be true before capital belongs in the conversation?",
      "What risks are routinely misunderstood?",
      "What information should exist before you engage?",
    ],
    ndaRelevance:
      "This matters because contractual complexity is not a substitute for counterparty quality.",
    frictionRelevance:
      "This matters because underwriting requires human resistance and hard proof of product/funds rather than algorithmic optimism.",
    questionGuidance: {
      q1: "What trade finance, SBLC/LC facilities, warehouse lines, or private capital structures do you routinely deploy or structure?",
      q2: "What risk-mitigation or balance-sheet capability can you bring that unlocks high-volume physical transaction flow?",
      q3: "What KYC/AML, chain-of-title, and independent SGS/inspection verification must be confirmed before capital steps in?",
      q4: "What risk-adjusted yield, facility fee, and equity/profit participation reflects your capital contribution?",
      q5: "What structural deficits (unproven escrow, unrated banks, unverified sovereign guarantees) are automatic deal-killers?",
    },
  },
  compliance: {
    id: "compliance",
    cardHeadline: "I VERIFY AND PROTECT TRANSACTIONS",
    roleTitle: "Diligence / Compliance / Legal",
    invitationRelevance:
      "We invited you because real institutional resilience is built into transaction design from Day 1, not patched during emergency post-disaster cleanups.",
    pain: [
      "You are often asked to clean up structural problems after too many people and relationships have already become involved.",
    ],
    claim:
      "We want evidence, authority, protections, objections, and missing requirements surfaced earlier.",
    gain:
      "Compliance and legal discipline become part of transaction design rather than emergency cleanup.",
    whatWeNeed: [
      "Where should the gates be?",
      "What evidence matters?",
      "What should stop progression immediately?",
    ],
    ndaRelevance:
      "This matters because good governance begins before documents are signed.",
    frictionRelevance:
      "This matters because compliance friction is the immune system of a high-integrity trading desk.",
    questionGuidance: {
      q1: "Where have you built cross-border diligence, sanctions screening, or contractual guardrails that kept transactions safe?",
      q2: "What legal or regulatory oversight do you provide that protects everyone in the group from existential liability?",
      q3: "What governance charter and chain-of-custody protocols must this founding group commit to from the outset?",
      q4: "How should legal and compliance architects share in the value created by clean, executable transaction structures?",
      q5: "What governance compromises or gray-area shortcuts would make you veto participation immediately?",
    },
  },
  operator: {
    id: "operator",
    cardHeadline: "I MAKE COMPLEX DEALS MOVE",
    roleTitle: "Deal Operator / Facilitator",
    invitationRelevance:
      "We invited you because complex multi-party trades collapse without disciplined coordination, clear handoffs, and relentless operational follow-through.",
    pain: [
      "Complex deals often fail from coordination failure rather than lack of opportunity.",
      "People talk past one another.",
      "Nobody owns the next action.",
      "Important information disappears into messages, calls, and documents.",
    ],
    claim:
      "We are developing a repeatable operating layer around ownership, stage, evidence, communication, decisions, and next actions.",
    gain:
      "Good opportunities have a better chance of reaching the people capable of executing them.",
    whatWeNeed: [
      "Where does coordination normally break?",
      "What should be standardized?",
      "What requires human judgment?",
    ],
    ndaRelevance:
      "This matters because protection and momentum have to coexist.",
    frictionRelevance:
      "This matters because closing requires constant human alignment and accountability across every handoff.",
    questionGuidance: {
      q1: "Where have you organized chaotic, multi-stakeholder deals into clean, synchronized execution cadences?",
      q2: "What operational leverage or deal-room stewardship can you provide that prevents deals from stalling?",
      q3: "What communication protocols and decision rights do you need established among partners to operate effectively?",
      q4: "What compensation structure rewards relentless deal orchestration and operational execution fairly?",
      q5: "What behavior from participants (unresponsive counterparties, undocumented side deals) makes you step down?",
    },
  },
  principal: {
    id: "principal",
    cardHeadline: "I CONTROL SUPPLY, DEMAND OR ASSETS",
    roleTitle: "Principal / Strategic Partner",
    invitationRelevance:
      "We invited you because you control real physical assets, allocations, or demand and deserve direct counterparty channels free from broker clutter.",
    pain: [
      "You do not need twenty brokers claiming to represent your opportunity.",
      "You need the right counterparties reaching you through a process that respects your time, authority, information, and relationships.",
    ],
    claim:
      "We want to create disciplined pathways between legitimate principals and qualified counterparties without turning sensitive relationships into uncontrolled broker chains.",
    gain:
      "Better counterparties. Clearer process. Fewer unnecessary hops.",
    whatWeNeed: [
      "What would make this useful enough for you to participate directly?",
    ],
    ndaRelevance:
      "This matters because serious counterparties need boundaries without unnecessary theater.",
    frictionRelevance:
      "This matters because physical assets and refinery capacity cannot be faked or abstracted away.",
    questionGuidance: {
      q1: "What real production, storage, logistics, or offtake allocations do you control or directly represent?",
      q2: "What strategic positioning or proprietary asset access do you hold that transforms one-time fees into compounding enterprise value?",
      q3: "What counterparty qualification and discretion standards must be met before your assets or allocations are engaged?",
      q4: "How can this trading firm structure long-term commercial alignment that respects your principal standing?",
      q5: "What would make you say no—such as unvetted counterparties or public leaks of proprietary pricing?",
    },
  },
};

export const ROLE_ORDER: RoleId[] = [
  "trader",
  "originator",
  "capital",
  "compliance",
  "operator",
  "principal",
];

// Exact Google Drive Media Assets with correct Embeds and Direct Sources
export const MEDIA_SOURCES: Record<"breach" | "ndas" | "friction", MediaAsset> = {
  breach: {
    id: "into-the-breach",
    title: "Into the Breach",
    eyebrow: "THE VISION · 04:18",
    description:
      "A short film about what happens when access becomes abundant but judgment remains scarce. From market noise and broken broker chains toward protected relationships, attributable evidence, and disciplined execution.",
    mediaType: "video",
    driveId: "1e1Ap3wm5C4pVW1Xz3QJixQtZ2lR7DYjc",
    embedUrl: "https://drive.google.com/file/d/1e1Ap3wm5C4pVW1Xz3QJixQtZ2lR7DYjc/preview",
    duration: "4:18",
    transcript: `[NARRATOR]: Private markets do not suffer from a shortage of opportunities.

Look at any broker's phone or trading desk monitor. Dozens of WhatsApp channels pinging simultaneously. Offers for millions of barrels of crude oil, metric tons of copper cathodes, unverified bank instruments, and introduction chains five people deep.

Access has become cheap. The cost of generating another introduction has collapsed to zero.

Yet behind every unverified transaction is a quiet catastrophe of wasted motion:
• Weeks spent drafting NDAs that provide zero true security.
• Dozens of hours wasted by principals reading forged proof-of-product documents.
• Reputations burned by forwarding broker daisy chains where nobody has ever spoken to the actual signatory.

Finder's Guild began with a single contrarian question:
What if the real institutional value in private markets isn't in generating more noise, but in building the discipline to impose structure on it?

To protect relationships before they are exposed.
To verify authority before counterparties commit balance-sheet capital.
To reject weak deals on Day 1 rather than Day 45.

We call this 'Into the Breach.' Because stepping into real physical trade execution requires judgment, integrity, and the willingness to say no when the evidence is missing.

If you are an experienced trader, originator, capital partner, or principal who knows the difference between market noise and executable truth:
Welcome to the founding discussion.`,
  },
  ndas: {
    id: "why-aggressive-ndas",
    title: "Why Aggressive NDAs Are A Red Flag",
    eyebrow: "THE BOUNDARY · 06:45",
    description:
      "The system cannot protect relationships by simply adding more contracts and friction at the beginning. This audio explores the tension between legitimate protection and premature contractual pressure, and why qualification, boundaries, attribution, and earned trust matter.",
    mediaType: "audio",
    driveId: "1YuMzPp7cOE2gHIUPb2-AtxQksKo5IVP8",
    embedUrl: "https://drive.google.com/file/d/1YuMzPp7cOE2gHIUPb2-AtxQksKo5IVP8/preview",
    duration: "6:45",
    transcript: `[AUDIO TRANSCRIPT · THE BOUNDARY]:
Why Aggressive NDAs Are A Red Flag in Relationship-Driven Transactions

In commodity and private transaction circles, you frequently encounter an originator or broker who insists on executing a 14-page mutual non-disclosure agreement before they will even share the commodity category, jurisdiction, or general structure of the trade.

Here is the paradox: an aggressive, premature NDA is often an inverse indicator of deal reality.

Why? Because operators who actually have direct access to a principal or legitimate physical allocation know how to protect relationships through information architecture rather than blunt legal intimidation.

When someone demands an overly punitive NDA before sharing basic verifiable parameters, they are usually trying to compensate for one of three things:
First, a lack of direct relationship. They sit in the middle of a multi-tier chain and are terrified that if you learn anything about the counterparty, you will cut them out.
Second, a confusion between information and value. Access is not an entitlement to a permanent commission. Value comes from clearing friction, assuming risk, structuring the facility, or verifying execution.
Third, a substitution of legal paperwork for operational qualification. A piece of paper does not protect a relationship in cross-border trade; clear boundaries, stage-gated disclosures, and verifiable attribution do.

Finder's Guild enforces a different principle: protect the relationship through procedural stage gates. Disclose what is necessary to verify alignment. Agree on attribution before names are exchanged. If an operator cannot operate within that discipline and demands aggressive legal pre-conditions, that is your signal to step back.`,
  },
  friction: {
    id: "why-human-friction",
    title: "Why Finder's Guild Needs Human Friction",
    eyebrow: "THE CRITIQUE · 08:12",
    description:
      "This is the skeptical case. Where does software stop helping? Where does physical commodity execution resist abstraction? Where will brokers push back? Where does human judgment remain essential?",
    mediaType: "audio",
    driveId: "1enHW9O6hfBtbI4WeS93gp2LiodArxwx3",
    embedUrl: "https://drive.google.com/file/d/1enHW9O6hfBtbI4WeS93gp2LiodArxwx3/preview",
    duration: "8:12",
    transcript: `[AUDIO TRANSCRIPT · THE CRITIQUE]:
Why Finder's Guild Needs Human Friction: The Skeptic's Lens

Software engineers love frictionless systems. They want one-click introductions, instant database matching, and automated document flow.

In commodity trading and private capital, absolute frictionless flow is dangerous.

When you remove all friction from transaction flow, you don't get faster deals. You get an avalanche of unverified low-quality broker spam. You get people submitting deals they don't understand to buyers they don't know, hoping for a lottery ticket payout.

Human friction is where institutional judgment lives:
• Human friction is the experienced desk operator saying: 'I've seen this refinery spec before. That testing lab hasn't operated in that terminal for two years. This deal is fake.'
• Human friction is the compliance officer asking: 'Who is the ultimate beneficial owner of this trading company, and why is the payment routing through an offshore escrow?'
• Human friction is the trade finance principal saying: 'We will not issue an SBLC until we have independent third-party SGS inspection at the loading port.'

Software can organize data, extract specs, maintain audit logs, and calculate risks. But software cannot replace the reputational skin in the game that seasoned operators bring to the table.

We are not trying to eliminate human friction. We are trying to determine which friction protects value and which friction simply wastes it.`,
  },
};

// Authentic RFP Discussion Draft Pages (Full 6 Pages)
export interface RFPPageContent {
  pageNumber: number;
  header: string;
  subHeader: string;
  title: string;
  sections: {
    heading?: string;
    body: string[];
    callout?: {
      type: "highlight" | "quote" | "principle";
      label: string;
      text: string;
    };
    bullets?: string[];
  }[];
}

export const RFP_DISCUSSION_DRAFT_PAGES: RFPPageContent[] = [
  {
    pageNumber: 1,
    header: "BRYANT STRATTON | FOUNDING TRADING FIRM",
    subHeader: "CONFIDENTIAL DISCUSSION DRAFT · SEPTEMBER 2026",
    title: "REQUEST FOR FOUNDING PARTICIPATION: Building a Relationship-Driven Trading Firm",
    sections: [
      {
        body: [
          "An invitation to experienced traders, operators, capital partners, principals and specialists who want to help build the firm correctly from the beginning.",
        ],
        callout: {
          type: "highlight",
          label: "THE QUESTION",
          text: "We have enough evidence to know the operating pattern is useful. The next step is not more networking. It is assembling the people with the experience, judgment and integrity to turn that pattern into a real trading organization.",
        },
      },
      {
        body: [
          "Into the breach, we go, dear friends.",
          "I call upon your experience and your integrity, and I wonder: is this the right moment for you?",
        ],
      },
      {
        heading: "EXECUTIVE SUMMARY",
        body: [
          "Over the last several months, I have been working inside a growing flow of commodity and private-market opportunities. The recurring constraint has not been a shortage of deals or introductions. It has been the cost of determining what is real, who has authority, who can perform, what evidence is missing, who should be speaking to whom, and how to protect the relationships that make a transaction possible.",
          "We have now seen the same operating pattern work often enough that I believe there is an opportunity to build a real trading firm around it. I am not representing that the finished firm already exists. I am looking for experienced people who can help build it correctly.",
        ],
      },
      {
        heading: "WHERE WE ARE TODAY",
        body: [
          "Our internal operating environment currently contains a substantial pipeline of transactions and opportunities across commodities, precious metals, energy, infrastructure, capital and related private-market activity. More important than the count is the discipline being imposed on the flow: commercial alignment, authority, principal introduction, diligence and verification, then execution.",
        ],
        bullets: [
          "Turn fragmented calls, messages, documents and introductions into a clear opportunity record with an owner and next action.",
          "Identify missing authority, documentation, proof of funds, proof of product, procedures and other blockers before relationships are unnecessarily exposed.",
        ],
      },
    ],
  },
  {
    pageNumber: 2,
    header: "BRYANT STRATTON | FOUNDING TRADING FIRM",
    subHeader: "CONFIDENTIAL DISCUSSION DRAFT · SEPTEMBER 2026",
    title: "OPERATING DISCIPLINES & THE COMPOUNDING ASSET",
    sections: [
      {
        body: [],
        bullets: [
          "Match buyers, sellers, mandates, operators and specialists against actual transaction requirements instead of simply forwarding deals.",
          "Protect introductions and define economics before counterparties move deeper into a transaction.",
          "Facilitate conversations when counterparties are talking past one another and move them toward a usable next step.",
          "Run deal rooms that create shared visibility around active opportunities, requirements, decisions and follow-up.",
          "Learn from blocked and successful progression so future opportunities can be filtered and routed more intelligently.",
        ],
        callout: {
          type: "highlight",
          label: "WHAT THE TRACTION MEANS",
          text: "We have seen opportunities move beyond casual networking into protected relationships, supplier and buyer coordination, documented procedures, diligence requirements and explicit fee arrangements. That is traction. It is not yet the same thing as a mature trading firm with a long audited settlement history, and I do not want to represent it as one.",
        },
      },
      {
        heading: "WHAT WE BELIEVE WE CAN BUILD",
        body: [
          "A small, high-integrity trading organization that gets better as it operates. It should not win because it has the largest broker list. It should win because it is unusually good at finding the right people, rejecting weak opportunities early, protecting legitimate relationships, preserving institutional knowledge and getting qualified transactions to the people capable of closing them.",
          "We should begin where we already have active relationships and deal flow while refusing to expand faster than our ability to verify and execute. The first objective is not to be everywhere. It is to close repeatable business with people we trust.",
        ],
      },
      {
        heading: "THE COMPOUNDING ASSET",
        body: [
          "Every legitimate relationship and every transaction teaches us something: which procedures work, who performs, which claims survive diligence, what buyers require, what sellers can provide, where transactions stall, who communicates well under pressure, and which relationships repeatedly create value.",
          "That creates secondary and tertiary value beyond a single commission. Better relationship knowledge strengthens future matching. Better transaction history improves qualification. Better qualification protects reputation and time. Better coordination increases the value of the network.",
        ],
        callout: {
          type: "principle",
          label: "OPERATING PRINCIPLE",
          text: "Relationships are not inventory to be exploited. They are assets to be protected, attributed and strengthened.",
        },
      },
    ],
  },
  {
    pageNumber: 3,
    header: "BRYANT STRATTON | FOUNDING TRADING FIRM",
    subHeader: "CONFIDENTIAL DISCUSSION DRAFT · SEPTEMBER 2026",
    title: "THE FOUNDING TEAM WE NEED & ARCHITECT'S ROLE",
    sections: [
      {
        heading: "THE FOUNDING TEAM WE NEED",
        body: [
          "I am specifically looking for people who have already been down parts of this road. I do not want us to learn every lesson by paying for it ourselves.",
        ],
        bullets: [
          "Experienced Traders / Desk Operators — Brings: Transaction judgment, procedures, market experience and closing discipline. Builds with us: Help determine what deserves attention, what should be rejected, and how the desk actually executes.",
          "Originators / Representatives — Brings: Trusted buyer, seller, mandate and principal relationships. Builds with us: Help define attribution, protection and economics as relationships compound.",
          "Capital / Trade Finance — Brings: Capital, facilities, banking relationships and structuring experience. Builds with us: Help determine where capital belongs and how risk and return should be shared.",
          "Diligence / Compliance / Legal — Brings: Verification, KYC/AML, sanctions, contracts and transaction risk. Builds with us: Build enough discipline to protect counterparties without creating unnecessary bureaucracy.",
          "Deal Room / Facilitation — Brings: Organization, qualification, communication, follow-up and handoffs. Builds with us: Create immediate operating leverage and a path for developing future originators and closers.",
          "Principals / Strategic Partners — Brings: Real supply, demand, assets, operating businesses or strategic capabilities. Builds with us: Identify where repeated transactions can become durable strategic positions rather than one-time fees.",
        ],
      },
      {
        heading: "MY ROLE",
        body: [
          "I do not believe my highest-value role is to become the person taking every trade call or personally controlling every relationship. I am moving toward the role of architect, allocator and steward: finding exceptional people, creating the environment in which they can work together, improving how decisions are made, protecting relationships and economics, and helping capital, talent and opportunity find their highest-value use.",
        ],
      },
    ],
  },
  {
    pageNumber: 4,
    header: "BRYANT STRATTON | FOUNDING TRADING FIRM",
    subHeader: "CONFIDENTIAL DISCUSSION DRAFT · SEPTEMBER 2026",
    title: "HOW WE WOULD WORK TOGETHER & ECONOMIC PRINCIPLES",
    sections: [
      {
        body: [
          "The closest analogy for the direction of that role is the position Ray Dalio ultimately occupied at Bridgewater: not because we are trying to copy Bridgewater, but because I want to build the principles, people and decision environment that allow talented operators to outperform what any one of us could do alone.",
          "I also need people around me who will challenge me. When we bring in an experienced trader, capital partner or strategic operator, I want people at the table who can help determine what that contribution is worth, how we should split the pie, when I am undervaluing what I have built, and when someone else deserves more because they are creating disproportionate value.",
        ],
      },
      {
        heading: "HOW WE WOULD WORK TOGETHER",
        body: [
          "I do not want to hand prospective partners a finished corporate structure and ask them to fit into it. The people who become foundational to this firm should help determine how it works.",
        ],
        bullets: [
          "Begin with one or more real opportunities where we can observe how we work together.",
          "Identify each person's actual role, authority, relationships and contribution.",
          "Protect introduced relationships and preserve attribution.",
          "Agree on transaction economics before sensitive relationships are exposed.",
          "Operate transparently enough that the people responsible for a transaction understand the chain, procedure and economics.",
          "Review what worked, what failed and what should change.",
          "Use that evidence to build the MOU and operating agreements that define the founding group's roles, protections, economics and decision rights.",
        ],
        callout: {
          type: "principle",
          label: "FORMATION PRINCIPLE",
          text: "The MOU is not the beginning of trust. It is the documentation of what we learn about how we should work together.",
        },
      },
      {
        heading: "ECONOMIC PRINCIPLE",
        body: [
          "I am not proposing one universal commission split for every person or every transaction. A fair structure depends on who originates the opportunity, who owns the buyer or seller relationship, who has authority, who provides capital, who facilitates, who performs the work, who assumes risk and who actually gets the transaction closed.",
          "We should define those economics before the transaction advances, protect the people who create value, and build a firm where cooperation is economically rational. If we create a larger pie together, the people responsible for creating it should participate fairly in that value.",
        ],
      },
      {
        heading: "WHAT THIS IS NOT",
        body: [],
        bullets: [
          "Not an invitation to dump unverified deals into another group.",
          "Not a promise that every opportunity we see is real or executable.",
          "Not a broker chain where access alone creates entitlement to economics.",
        ],
      },
    ],
  },
  {
    pageNumber: 5,
    header: "BRYANT STRATTON | FOUNDING TRADING FIRM",
    subHeader: "CONFIDENTIAL DISCUSSION DRAFT · SEPTEMBER 2026",
    title: "WHY IT MATTERS BEYOND THE TRADE & THE REQUEST",
    sections: [
      {
        body: [],
        bullets: [
          "Not a request to surrender your relationships to a platform.",
          "Not a finished fund, trading desk or institutional infrastructure pretending to be more mature than it is.",
          "It is an invitation to help build the operating company that can responsibly grow into those capabilities.",
        ],
      },
      {
        heading: "WHY IT MATTERS BEYOND THE TRADE",
        body: [
          "I want this to produce meaningful economic outcomes. I also believe economic strength expands what we can do for other people. A firm that consistently helps capable people work together can create jobs, finance projects, support communities, open markets, strengthen counterparties and give us the resources to act on the things we say matter to us.",
          "Impact without economic durability is fragile. Economic success without a reason beyond accumulation is not particularly interesting to me. I want us to build something where the two reinforce each other.",
        ],
      },
      {
        heading: "THE REQUEST",
        body: [
          "If you are receiving this, it is because I believe your experience, relationships, judgment or integrity may belong somewhere in this effort.",
          "I am not asking you to join a finished company today. I am asking whether you are willing to explore building it with us.",
          "The first conversation should answer five questions:",
        ],
        bullets: [
          "Where have you already created repeatable value in trading, capital, operations or relationships?",
          "What role could you play here that would be difficult to replace?",
          "What would you need to see from us before putting your reputation or relationships behind this?",
          "What economics and protections would make participation fair to you?",
          "What would make you say no?",
        ],
      },
      {
        heading: "INTO THE BREACH",
        body: [
          "I have spent enough time around opportunities to know that the answer is not another giant network, another list of deals or another room full of people claiming access.",
          "The opportunity is to assemble the people who can tell the difference, protect one another while doing it, and build enough shared operating discipline that our collective reach becomes more useful every time we work together.",
          "If we can do that, the trading firm is the first-order result. The relationships, knowledge, capital formation, better matching and ability to support meaningful work are the compounding results.",
        ],
        callout: {
          type: "quote",
          label: "INVITATION",
          text: "Into the breach, we go, dear friends. I call upon your experience and your integrity. Is this the right moment for you?",
        },
      },
    ],
  },
  {
    pageNumber: 6,
    header: "BRYANT STRATTON | FOUNDING TRADING FIRM",
    subHeader: "CONFIDENTIAL DISCUSSION DRAFT · SEPTEMBER 2026",
    title: "EXPRESSION OF INTEREST & CONFIDENTIALITY NOTE",
    sections: [
      {
        heading: "EXPRESSION OF INTEREST",
        body: [
          "If you would like to explore becoming part of the founding group, reply with a short note covering:",
        ],
        bullets: [
          "Your current role and the markets where you have direct operating experience.",
          "The role you would most naturally play in this group.",
          "The types of relationships or capabilities you could responsibly bring, without disclosing confidential names at this stage.",
          "The first kind of transaction or problem you would want to work on together.",
          "Any immediate concern, condition or conflict we should surface before proceeding.",
        ],
      },
      {
        body: [
          "From there, we determine whether there is a real first piece of work to do together. If there is, we execute, learn from it, and use that evidence to build the MOU and founding structure together.",
        ],
      },
      {
        heading: "CONFIDENTIALITY NOTE",
        body: [
          "This summary intentionally omits specific counterparties, proprietary methods, technical architecture and confidential transaction details. It is a discussion document, not an offer of securities or a representation that any referenced opportunity will close.",
        ],
      },
    ],
  },
];
