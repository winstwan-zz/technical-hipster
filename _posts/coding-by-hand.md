{{{
  "title"    : "Coding By Hand",
  "author"   : "toad",
  "tags"     : [ "vi", "emacs", "handcoding", "tesseract" ],
  "category" : "Old School",
  "date"     : "9-1-2013"
}}}

It's hard for me to imagine actually arguing about **vi** and **Emacs**. I picture a window-less room and a bunch of computers like the ones you see any time someone in a movie needs to hack something. (You can experience being the hacker over at [hackertyper.net](http://hackertyper.net). It's just like being on a movie set, I promise.)

The bearded characters in my imagined argument are typing furiously. They're on opposite sides of the room, a room which is probably nearer the size of Star Trek's escape pods rather than the bridge. (Apparently there are many types of escape pods, so I'm talking specifically about [these](http://en.memory-alpha.org/wiki/Sovereign_type_escape_pod).)

They yell obscenities at each other, and the Emacs guy regularly threatens to meta-key the vi guy. Neither of them know what that means, but they both find it infuriating. 

Eventually, inevitably, another man walks into the room. He looks like [the drummer from The Black Keys](http://media.digitalphotogallery.com/qaiopruqnfyy/images/08154000-e9fd-40ea-bd9f-86fb051af286/patrick_carney_of_the_black_keys01_website_image_standard.jpg?20120225110422). He sits down at another computer and unplugs the keyboard. This is admittedly a little melodramatic, but he can't help himself. He pulls a pen and a small, black notebook from his pocket and begins writing. 

Meanwhile, the insults from the other two become less vehement. They are uncomfortably aware of the other man. They know the guy down the hall who only uses **ed**, but this, this is something new.

Minutes pass before the man stops writing. The other two turn to stare at him as he stands, and he glances casually from one to the other. He tosses the notebook into the center of the floor and says, "One of you type this up, will you?"

The man walks out of the room and the bearded [evangelists](http://www.stallman.org/saint.html) dive for the notebook. The tension is so high that the static electricity nearly causes their beards to brawl. Fortunately for the vi guy, he always wears his static wrist guard. He grabs the notebook and rolls away, thinking to himself, "Thank goodness I have the necessary self-esteem to wear a [pocket protector](http://www.pocketprotectors.com/)."

His next thought, which he speaks aloud, is, "My God! This is in Lisp!"

The Emacs guy shrieks, "It's mine! That must be mine! That was meant for Emacs!"

Chaos ensues.

So yeah, that's what I imagine when I read about the [Editor War](http://en.wikipedia.org/wiki/Editor_war). Actually, that's what I think about any time I read or hear about an editor dispute. I don't care if you use Eclipse or Visual Studio. I don't even care if you use Xcode (though I really am curious as to why you would do that). I also don't care if you think IDEs are totally unnecessary and you're happy with vi, vim, Emacs, Notepad++, or SublimeText.

Why? Well, for one, they're just productivity tools. As long as you know how to use your chosen editor well enough to be productive, who cares?

But mostly the reason I don't care is because I want to be [that guy](http://popdose.com/wp-content/uploads/Carney.jpg). Not the one in the band -- the one who hand codes his code. Have you googled [coding by hand](https://www.google.com/search?q=coding+by+hand)? Hand coding isn't technically about using pen and paper, it's about not using a WYSIWYG editor. Please. If I was awesome enough, and had enough paper, I'd code Dreamweaver itself by hand. (Does anyone actually use Dreamweaver anymore? Even Adobe is pitching [Reflow](http://html.adobe.com/edge/reflow/).)

Unfortunately, I'm not that awesome. I'm also not awesome enough to raise and release butterflies at certain intervals such that the vibrations of their wings cause the code to write itself. If he'd been a coder, that's basically what Buddha would've done in his spare time before abandoning his earthly body.

The only problem with my little story is that the guy's handwritten code wasn't actually going to be used as input. So in an attempt to one-up my imagination, I started looking into free OCR software. I quickly downloaded [Free OCR](http://www.paperfile.net/) and installed it. Don't do that, it's just a bundle of spyware. But the engine it claims to use actually is legit, so I downloaded that - [Tesseract](https://code.google.com/p/tesseract-ocr/) - instead.

It took a little bit of work to get it set up, especially the debugging tools, which in my opinion were absolutely necessary given that the first time I tried to run Tesseract it spit out an empty file. I don't like having to download and rename dependencies and put them in just the right folder in order for something to work. But it's open source, bro, fix it yourself, right?

Anyway, I added some training data and carefully wrote some code to have an alligator eat my last paragraph: ![I am alligator. I am eat your blog.](/images/posts/first-attempt-at-coding-ocr.jpg)

Then I ran Tesseract on that:

    x   u""ction () {
    pvclr "t" }("u co" ff  e nt
          

     var   a = " ; oo " "     

    =   ="= e"t :l:ntcmn"v oc 

    lca p m

So yeah, obviously there are some problems. I have one `var` and most of a `function` keyword. My `a` is supposed to be an alligator, but I think I'm going to give up on that. Also, I suck at writing ampersands, and no I'm not trying to write `++a`.

There are some problems with the code itself, too. For instance, the interval should really only start after some user action. I side with [this post](http://davidwalsh.name/javascript-semicolons) when it comes to the great semicolon debate, but I dropped them entirely for the next run. 

I did a bit more training, and though Tesseract applies some aggressive thresholding by default, I did that step myself this time. Here it is:

![I am mouth now.](/images/posts/third-attempt-at-coding-ocr.jpg)

 The results are a lot better:

    }(function  {

    var n = $(".conteng p"). last()
    var t = n.text()
    var a = " > "

    var i"

    . setInterval(
    function() {

    ,r= t.substr,.ng (o,
    t.length .1 >
    n.text (t +a)

    if (,r)

    clear Interval 
    } , loo;

    };

It actually took a bunch of intermediate steps to get to this point, including rearranging snippets of the image in GIMP, and it's a little frustrating to see the same snippet get incorrectly parsed in this example after it had been parsed correctly in a previous one. I'm not having much success with numbers, either.

I've only used a few snippets of handwritten code as my training data, and it's tedious to do more than that because each character has to be annotated. I should do more, but then someone's just going to say, "Why didn't you do this in assembly, bro?" I won't have a good answer, and all of a sudden I'll feel like **[this](http://anewscafe.com/wp-content/uploads/2010/10/sad-drummer-boy.jpg)** instead of **[this](http://cdn.pigeonsandplanes.com/wp-content/uploads/2013/02/patrickcarney1.jpg)**. 

Or worse, they'll ask why I didn't use coffeescript, which actually would've been a good choice since it's terser. But I can't give up just yet:

![Please something work!](/images/posts/please-console-log.jpg)

Success!

    console . log ("hello")
    console . log ("hi)
    consolc.log (o)
    consol.. . log ("a")
    consolc . lo ("v")
    console. log (ov "}

<script type="text/javascript">console . log ("hello")</script>

That's right, I'm counting the first one - open up your console and see for yourself.

So yes, I do write code by hand.

