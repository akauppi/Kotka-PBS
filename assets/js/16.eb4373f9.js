(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{360:function(e,t,s){e.exports=s.p+"assets/img/120-wheel-and-mount.885205ee.png"},390:function(e,t,s){"use strict";s.r(t);var o=s(42),a=Object(o.a)({},(function(){var e=this,t=e.$createElement,o=e._self._c||t;return o("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[o("h1",{attrs:{id:"_120-wheel-mount"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#_120-wheel-mount"}},[e._v("#")]),e._v(" 120 - Wheel + mount")]),e._v(" "),o("blockquote",[o("p",[o("img",{attrs:{src:s(360),alt:""}})])]),e._v(" "),o("p",[e._v("Within MVP 0.1, the wheel mounts do not move, relative to the beams. This is a simple setup and enough to tune the suspension part correctly.")]),e._v(" "),o("p",[e._v("The wheel + mount:")]),e._v(" "),o("ul",[o("li",[e._v("provides structural rigidity, passing the vehicle's weight to the track")]),e._v(" "),o("li",[e._v("provides passive suspension (up/down), against minor height variations in the track")])]),e._v(" "),o("h2",{attrs:{id:"goals"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#goals"}},[e._v("#")]),e._v(" Goals")]),e._v(" "),o("ul",[o("li",[o("p",[e._v("Prepare for 40 km/h speed (affects motor selection)"),o("sup",{staticClass:"footnote-ref"},[o("a",{attrs:{href:"#fn1",id:"fnref1"}},[e._v("[1]")])])])]),e._v(" "),o("li",[o("p",[e._v("Both front and rear wheels are motorized.")]),e._v(" "),o("p",[e._v('Note that this is not an absolute goal. We can e.g. use wheels of different size (at some point), where one (rear) would be more in charge of actual power output. But for MVP 0.1 the goal is to have "all wheel drive".')])])]),e._v(" "),o("p",[e._v("The wheel do not turn.")]),e._v(" "),o("p",[e._v("In fact, studying how much turning torque running with this arrangement gives could be one of the studied from MVP 0.1.")]),e._v(" "),o("h3",{attrs:{id:"wheel-motor"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#wheel-motor"}},[e._v("#")]),e._v(" Wheel motor")]),e._v(" "),o("p",[e._v("The wheel envisioned for the prototype is a "),o("a",{attrs:{href:"https://gemmotors.si/products",target:"_blank",rel:"noopener noreferrer"}},[e._v("GEM Motors 1.1"),o("OutboundLink")],1),e._v(" - 24cm diameter European wheel motor.")]),e._v(" "),o("p",[e._v("Different wheels can be used - as long as the suspension takes care of their size differences and other details. This is why we regard the wheel + mount as a single design module (mount is an adapter part).")]),e._v(" "),o("p",[e._v("Proving the suitability of GEM 1.1 to the task is a goal.")]),e._v(" "),o("h3",{attrs:{id:"tire"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#tire"}},[e._v("#")]),e._v(" Tire")]),e._v(" "),o("p",[e._v("The plan is to make a custom tire (we need concave profile). Testing the feasibility of this and its performance is part of MVP 0.1.")]),e._v(" "),o("h2",{attrs:{id:"design-notes-mvp-0-1"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#design-notes-mvp-0-1"}},[e._v("#")]),e._v(" Design notes (MVP 0.1)")]),e._v(" "),o("p",[e._v("Simplicity is paramount. With this design, we plan to learn about the realm in order to improve it in MVP 0.2.")]),e._v(" "),o("ul",[o("li",[e._v("How can the suspension best be attached to the beam?")]),e._v(" "),o("li",[e._v("Do we need suspension / how much?")]),e._v(" "),o("li",[e._v("Does the suggested (self made) suspension work?")]),e._v(" "),o("li",[e._v("How much forces (torques, vibrations) does a running motor provide?")]),e._v(" "),o("li",[e._v("Is the selected motor good for us?")]),e._v(" "),o("li",[e._v("How easy is the motor to control?")]),e._v(" "),o("li",[e._v("Study if tilting the suspension (e.g. 5°, 10°, 15°) is better for features than the proposed vertical orientation")])]),e._v(" "),o("p",[e._v("There isn't a dedicated controller in the PBS for the wheel. The idea is that we just provide power and run some signal lines. We'll see if that is enough (we need: set target speed, get event when target speed is reached, get current speed).")]),e._v(" "),o("p",[e._v("Attaching the suspension to the beam is considered a manual step (read: angle grinder! 💫⚡️). We don't really need to optimize that, as long as it's a rigid connection. Use auxiliary pipes, if necessary (slide some inside the beams, like the central hub "),o("code",[e._v("#112")]),e._v(" does, if necessary).")]),e._v(" "),o("blockquote",[o("p",[e._v("Hint: You noticed the mention about tilting angles. Maybe the attachment can have multiple bolt holes and allows for easy change of angles?")])]),e._v(" "),o("p",[e._v("There are "),o("code",[e._v("#122-000[a-d]")]),e._v(" parts marked in the PBS but these may or may not be needed.")]),e._v(" "),o("p",[e._v("Suspension's top is allowed to raise up to the level of the wheel, but if possible (as in the picture), it's better to leave it lower. The space of the front wheels is near passengers' legroom and we might end up with space constraints here, later in the project.")]),e._v(" "),o("h2",{attrs:{id:"options"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#options"}},[e._v("#")]),e._v(" Options")]),e._v(" "),o("p",[e._v("The wheel size can be anything (that would take the vehicle min 40 km/h, as stated).")]),e._v(" "),o("p",[e._v("Tilting the suspension (at a slight angle, e.g. 10° away from vertical), in the direction of the front facing movement is possible. There will, however, remain a requirement to be able to reverse the vehicles, but the comfort doesn't need to be as good and speed may be less than forward facing speed.")]),e._v(" "),o("p",[e._v("In MVP 0.2, we'll need to be able to raise the wheels a bit (1..2cm), for crossing rails. The amount comes from the curvature of the tire's concave. If this is possible within the suspension system (adding active components to it), great. If not, we'll look for other ways to do it.")]),e._v(" "),o("p",[e._v("Suspension can be active. Within MVP 0.1 we should learn, how well passive suspension would work. If it does, it may make control systems simpler, being able to think the track is flat underneath. It is crucial for the overall project that the track is nimble - and that makes it flexible. How we handle that flexibility is up to us - suggestions are welcome but likely we just need to try it out and learn. Lots.")]),e._v(" "),o("h2",{attrs:{id:"concerns"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#concerns"}},[e._v("#")]),e._v(" Concerns")]),e._v(" "),o("p",[o("em",[e._v("Add concerns here")])]),e._v(" "),o("h2",{attrs:{id:"specs"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#specs"}},[e._v("#")]),e._v(" Specs")]),e._v(" "),o("table",[o("thead",[o("tr",[o("th",[e._v("Spec id")]),e._v(" "),o("th")])]),e._v(" "),o("tbody",[o("tr",[o("td",[o("code",[e._v("SPEED(11 m/s)")])]),e._v(" "),o("td",[e._v("wheels can spin 11m/s (40 km/h)")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("STIFF")])]),e._v(" "),o("td",[e._v("vibrations and torques from the running motor (at full "),o("code",[e._v("SPEED")]),e._v(") don't cause problems for the frame (considering by passenger comfort but also accuracy of grabber arms)")])]),e._v(" "),o("tr",[o("td",[o("code",[e._v("SUSPENSION")])]),e._v(" "),o("td",[e._v("suspension can smooth out a range of vibrations. One sample can be 1cm/1s sine-lift(*), which should be more or less supressed")])])])]),e._v(" "),o("p",[e._v("(*) emulating support poles every 10m, speed 10m/s, where poles give more support than track in between them")]),e._v(" "),o("h2",{attrs:{id:"test-cases"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#test-cases"}},[e._v("#")]),e._v(" Test cases")]),e._v(" "),o("p",[e._v("later")]),e._v(" "),o("h2",{attrs:{id:"parts"}},[o("a",{staticClass:"header-anchor",attrs:{href:"#parts"}},[e._v("#")]),e._v(" Parts")]),e._v(" "),o("ul",[o("li",[e._v("121 - Suspension (and wheel)")]),e._v(" "),o("li",[e._v("122 - Connection to beam")])]),e._v(" "),o("hr",{staticClass:"footnotes-sep"}),e._v(" "),o("section",{staticClass:"footnotes"},[o("ol",{staticClass:"footnotes-list"},[o("li",{staticClass:"footnote-item",attrs:{id:"fn1"}},[o("p",[e._v("We're likely not going to be travelling this fast, with MVP 0.1. It makes sense to have a realistic goal though, lest we pick too flimsy motors and end up correcting the choice, later. "),o("a",{staticClass:"footnote-backref",attrs:{href:"#fnref1"}},[e._v("↩︎")])])])])])])}),[],!1,null,null,null);t.default=a.exports}}]);