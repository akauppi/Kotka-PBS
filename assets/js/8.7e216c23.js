(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{357:function(e,t,o){e.exports=o.p+"assets/img/112-hub.6f8f7998.png"},358:function(e,t,o){e.exports=o.p+"assets/img/112-side.a5358678.png"},388:function(e,t,o){"use strict";o.r(t);var a=o(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"_112-central-hub"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_112-central-hub"}},[e._v("#")]),e._v(" 112 - Central hub")]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:o(357),alt:""}})])]),e._v(" "),a("p",[e._v("The central hub connects the four beams together, in the middle. It is crucial for structural integrity of the vehicle frame, yet should be kept as light as responsible.")]),e._v(" "),a("p",[e._v("The hub has two parts, inner and outer. They are co-centric and rotate againts each other. Rotational speed is relatively low, range at most\n±22° from straight alignment between the beams"),a("sup",{staticClass:"footnote-ref"},[a("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])]),e._v(".")]),e._v(" "),a("p",[e._v("Asko tried to find existing parts to do this job, but it seems a dedicated design is needed.")]),e._v(" "),a("p",[e._v("The circular opening in the middle can be smaller than pictured. It is intended for the cabin interface, and not crucial in MVP 0.1.")]),e._v(" "),a("h2",{attrs:{id:"design-notes"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#design-notes"}},[e._v("#")]),e._v(" Design notes")]),e._v(" "),a("h3",{attrs:{id:"attachment-to-beams"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#attachment-to-beams"}},[e._v("#")]),e._v(" Attachment to beams")]),e._v(" "),a("p",[e._v("The hub connects to the beams with inset pipes (suggestion). Such pipes must be long enough to provide good rigidity with the beams. The ends of the pipes should be rounded, to not cause spiky forces to the beams. (Other designs may also be suggested for the attachment to the beams.)")]),e._v(" "),a("h3",{attrs:{id:"assembly"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#assembly"}},[e._v("#")]),e._v(" Assembly")]),e._v(" "),a("p",[e._v("The rear part is intended to be manufactured in two pieces, allowing the whole to be assembled like a sandwich, leaving the front cylinder (yellow) in between the rear halves.")]),e._v(" "),a("blockquote",[a("p",[e._v("This halfing is not in the model, or in the picture. It is not decided, whether the beam attachments should be connected to both halves (likely better) or just one.")])]),e._v(" "),a("h3",{attrs:{id:"avoiding-vertical-backlash"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#avoiding-vertical-backlash"}},[e._v("#")]),e._v(" Avoiding vertical backlash")]),e._v(" "),a("p",[e._v("This is one of the important structural jobs of the part. The rest of the design (see "),a("code",[e._v("#190")]),e._v(" Ribs MVP 0.2) tries to avoid loading the hub with downward pointing force, but of course there will be some.")]),e._v(" "),a("p",[e._v("The form of the front and rear cylinders should help in this. We don't want to grow the cylinders too high or thick, but we can have the front cylinder have overhangs (in front and back) that take support of the rear piece (using horizontal dimension for added support).")]),e._v(" "),a("p",[e._v("These are not in the picture, but keep in mind. Allows us to make flatter donut with more structural integrity. Note: We can also have them only in one side (back), keeping the overall space envelope of the part small. 🙌")]),e._v(" "),a("h3",{attrs:{id:"rotating-force"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rotating-force"}},[e._v("#")]),e._v(" Rotating force")]),e._v(" "),a("p",[e._v("The motor rotating the hub is not in the picture. There are multiple techniques that could be used:")]),e._v(" "),a("ul",[a("li",[e._v("worm gear; gear directly attached to the yellow cylinder (front)")]),e._v(" "),a("li",[e._v("winch; wires pulling the yellow cylinder left/right")]),e._v(" "),a("li",[e._v("hydraulics")])]),e._v(" "),a("p",[e._v("The motor arrangement must be such that external forces (kickback) does not cause harm to the motor, nor cause steering (worm gear comes to mind).")]),e._v(" "),a("p",[e._v("Naturally frictions need to be reduced, in order to keep the motor relatively sized.")]),e._v(" "),a("h4",{attrs:{id:"_1-worm-gear-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-worm-gear-implementation"}},[e._v("#")]),e._v(" 1. Worm gear implementation")]),e._v(" "),a("p",[e._v("The inner cylinder could have worm gears attached on its surface. A motor driving such could be attached to the outer cylinder, horizontally.")]),e._v(" "),a("p",[e._v("To get best grip, a "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=OVTOSOKpx6I",target:"_blank",rel:"noopener noreferrer"}},[e._v("globoid kind of worm gear"),a("OutboundLink")],1),e._v(" (Youtube) might be best (longest touch between the gears).")]),e._v(" "),a("p",[e._v("Pros / cons:")]),e._v(" "),a("ul",[a("li",[e._v("🟢 simple (once the gear is modeled) and mechanic: no stretching parts or liquids")]),e._v(" "),a("li",[e._v("🟢 great kickback prevention")]),e._v(" "),a("li",[e._v("🟡 cannot be made to disappear into the beams (= takes space)")])]),e._v(" "),a("p",[e._v("This is likely the way to go. The gears and the motor can be enclosed in the rear piece, making them an internal part of the design.")]),e._v(" "),a("h4",{attrs:{id:"_2-winch-implementation"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-winch-implementation"}},[e._v("#")]),e._v(" 2. Winch implementation")]),e._v(" "),a("p",[e._v("Another possibility is wires pulling the cylinder in one or the other direction. If such wires follow the curvature of the cylinder, their total length remains constant, regardless of the turn angle.")]),e._v(" "),a("blockquote",[a("p",[e._v("Note: Wires often allow for leverage, but with using the cylinder this is challenging (uses up the vertical space of the cylinder). At most 2x leverage is possible (3 + 3 wires). See "),a("a",{attrs:{href:"https://www.youtube.com/watch?v=utDagouxM5U",target:"_blank",rel:"noopener noreferrer"}},[e._v("this video"),a("OutboundLink")],1),e._v(" (Youtube, 2020, 11:23) on leverage with wires.")])]),e._v(" "),a("p",[e._v('The wires can be attached to the "ears" of the front piece, perhaps with a mechanism that allows them to be tightened in place.')]),e._v(" "),a("p",[e._v("Winch can be made either with one continuous wire or two separate ones (and two separate motors).")]),e._v(" "),a("p",[e._v("Compared to worm gear:")]),e._v(" "),a("ul",[a("li",[e._v("🟢 easier to manufacture (if not 3D-printing the gears)")]),e._v(" "),a("li",[e._v("🟡 which one takes more space?")]),e._v(" "),a("li",[e._v("🟡 likely similar weights")])]),e._v(" "),a("p",[e._v("Winch remains a plan B. The good part is that the cylinders can be designed to facilitate either one, so we can experiment. Part of MVP 0.1 outcome must be knowledge on how to steer this thing properly and robustly.")]),e._v(" "),a("h3",{attrs:{id:"rotation-sensor"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#rotation-sensor"}},[e._v("#")]),e._v(" Rotation sensor")]),e._v(" "),a("p",[e._v("Either via the motor, or with an external sensor, we must be able to tell the angle between front and end beams, whether steered by the motor or by outside forces.")]),e._v(" "),a("blockquote",[a("p",[e._v("Q: [ ] How to measure such an angle?")])]),e._v(" "),a("p",[e._v("Just placing Gray coding strips on one half and a detector on the other would do this.")]),e._v(" "),a("blockquote",[a("p",[e._v("Benefit of not needing the motor to have position awareness is larger range of motors to select from. Then again, the motor needs to be good at keeping its current position.")])]),e._v(" "),a("h3",{attrs:{id:"dimensions"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#dimensions"}},[e._v("#")]),e._v(" Dimensions")]),e._v(" "),a("blockquote",[a("p",[a("img",{attrs:{src:o(358),alt:""}})])]),e._v(" "),a("p",[e._v("The hub may extend past the "),a("em",[e._v("top")]),e._v(" of the beams, but not below them.")]),e._v(" "),a("p",[e._v("It is preferable if also the top can be kept at the level of the beams' top, but this is providing the cabin interface (see Requirements to other parts).")]),e._v(" "),a("h2",{attrs:{id:"passive-return-to-alignment-considered"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#passive-return-to-alignment-considered"}},[e._v("#")]),e._v(" Passive return to alignment (considered)")]),e._v(" "),a("p",[e._v("It could be nice for resiliency that in the case of motor damage, a straight alignment would happen naturally.")]),e._v(" "),a("p",[e._v("This could be done e.g. by adding springs between the front/end sides of the hub, pushing for a balanced situation.")]),e._v(" "),a("p",[e._v("However, this contradicts our aim to have high tolerange for kickback. Outside forces (of the motor) should not be able to decide the angle. If we want springs, we much specify how much they are allowed to push back. For winch this wouldn't be a problem. For worm gear it likely is.")]),e._v(" "),a("p",[e._v("So no springs, at least for now.")]),e._v(" "),a("h2",{attrs:{id:"concerns"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#concerns"}},[e._v("#")]),e._v(" Concerns")]),e._v(" "),a("p",[a("em",[e._v("Add concerns here")])]),e._v(" "),a("h2",{attrs:{id:"specs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#specs"}},[e._v("#")]),e._v(" Specs")]),e._v(" "),a("p",[e._v("Strength specs come from the #100 combined assembly requirements.")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Spec id")]),e._v(" "),a("th")])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("STEERING RANGE")])]),e._v(" "),a("td",[e._v("must open ±22° from the alignment")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("STEERING ACCURACY")])]),e._v(" "),a("td",[e._v("must be able to steer the angle by "),a("font",{attrs:{color:"red"}},[e._v("xxx")]),e._v(" deg")],1)]),e._v(" "),a("tr",[a("td",[a("code",[e._v("STEERING RESISTANCE")])]),e._v(" "),a("td",[e._v("must be able to keep the steering angle, despite "),a("font",{attrs:{color:"red"}},[e._v("xxx")]),e._v(" N force pushing against it (may use electric power for doing so)")],1)]),e._v(" "),a("tr",[a("td",[a("code",[e._v("NOT BELOW BEAMS")])]),e._v(" "),a("td",[e._v("the hub shall not extend below the lowest point of the beams(*)")])])])]),e._v(" "),a("p",[e._v("(*) Wheel + suspension design is in charge of enough clearance between the track and the beams. We don't want overhangs that would change this.")]),e._v(" "),a("h2",{attrs:{id:"requirement-to-other-parts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#requirement-to-other-parts"}},[e._v("#")]),e._v(" Requirement to other parts")]),e._v(" "),a("table",[a("thead",[a("tr",[a("th",[e._v("Towards part")]),e._v(" "),a("th",[e._v("Req id")]),e._v(" "),a("th")])]),e._v(" "),a("tbody",[a("tr",[a("td",[a("code",[e._v("#600")]),e._v(" - battery")]),e._v(" "),a("td",[a("code",[e._v("POWER NEED(xxx V, yyy Apeak)")])]),e._v(" "),a("td",[e._v("requires xxx Volts with xxx Amps (peak)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("#300")]),e._v(" - cabin")]),e._v(" "),a("td",[a("code",[e._v("CABIN INTERFACE OPENING(xxx mm)")])]),e._v(" "),a("td",[e._v("how wide is the opening")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("#300")]),e._v(" - cabin")]),e._v(" "),a("td",[a("code",[e._v("CABIN INTERFACE DEPTH(xxx mm)")])]),e._v(" "),a("td",[e._v("how deep is the opening (cabin will have clamps through it)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("#300")]),e._v(" - cabin")]),e._v(" "),a("td",[a("code",[e._v("CABIN INTERFACE SMOOTH BELOW(xxx mm)")])]),e._v(" "),a("td",[e._v("how wide outside the bottom opening is flat (mm from edge)")])]),e._v(" "),a("tr",[a("td",[a("code",[e._v("#300")]),e._v(" - cabin")]),e._v(" "),a("td",[a("code",[e._v("CABIN WEIGHT ON HUB (xxx kg)")])]),e._v(" "),a("td",[e._v("how much of the cabin's weight is allowed to rest on the central hub")])])])]),e._v(" "),a("h2",{attrs:{id:"open-issues"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#open-issues"}},[e._v("#")]),e._v(" Open issues")]),e._v(" "),a("ul",[a("li",[e._v("[ ] Estimating the friction involved (force needed for the motor)\n"),a("ul",[a("li",[e._v("[ ] → Suitable motor selection\n"),a("ul",[a("li",[e._v("[ ] → Model the motor to Fusion 360")])])])])])]),e._v(" "),a("hr",{staticClass:"footnotes-sep"}),e._v(" "),a("section",{staticClass:"footnotes"},[a("ol",{staticClass:"footnotes-list"},[a("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[a("p",[e._v("This relates to a 3m minimum turning radius, and is dependent on the distance from the hub to the wheels. "),a("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=r.exports}}]);