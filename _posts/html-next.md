{{{
  "title"    : "\/HTML\\d*\/",
  "author"   : "toad",
  "tags"     : [ "q", "html4", "html5", "html6", "html9", "html10" ],
  "category" : "HTML5",
  "date"     : "9-15-2013"
}}}

I don't have a television, so I listen to the radio instead. The DJs on the station I usually listen to often introduce a song by saying, <q>This is new music by [Imagine Dragons|Fitz and The Tantrums|Hipsters Only Play Mandolins].</q> Except the songs aren't new. At least, given how many times I've heard them, they're not new to me. I mean, compared to Veruca Salt, they're probably new, but I don't think that's the comparison the DJs are going for. It's not that I'm tired of the music, or that it's gotten worse over time. It's just that it's not new. It's familiar, comfortable, like sitting on the couch with a cozy blanket on an autumn morning.

HTML5 is new music. Talking about it makes people feel cozy and comfortable: <q>Ah, yes, my web application will be modern and loved by all because I use HTML5. My tags are semantically meaningful, and I use <code>pushState</code> so that my users can have a seamless navigating experience!</q>

One way HTML5 manages to stay new is by [never having a completed specification](http://www.w3.org/html/wg/drafts/html/master/). In the <cite>status section</cite> it is noted that <q cite="http://www.w3.org/html/wg/drafts/html/master/">Implementors should be aware that this specification is not stable.</q> Plenty of intelligent people have already pointed out the pointlessness of not being willing to declare a specification complete even after much of it has been implemented. I don't have anything to add to that.

Instead, I want to talk about [HTML9 Responsive Boilerstrap JS](http://html9responsiveboilerstrapjs.com/). To use another radio analogy, this excellent technology is "brand new". As in, I heard that song last week but I don't know the lyrics yet. (In this case, it's actually been out for over a year.)

My favorite part about it is how using it to appify your appification will make you appy. But that got me thinking about the term "app". Obviously, it's easier and cuter to say "app" than "application". And I can see why the marketers chose that rather than shortening "program" to "prog". Some day, I'm going to make a mobile app about progressive rock, and I'll call it a prog app, and I'll be (h)appy.

Anyway. What I was really thinking about is - what's next? What's cuter than apps? Emoticons, obviously. 

<span style="font-size:16px;">&#9787;</span> 

So I figure, why not just call apps smiles? Imagine:

* Apple's Smile Store
* Download my smile!
* Hey, did you check out that sweet smile I posted about on my tumblr now that I can't just upload porn?

The next time you're walking behind someone using their phone and they stop suddenly and you have to side step and hurdle a flower pot to avoid them, just think to yourself, <q>Wow, what a great smile they must have found!</q> I guarantee it will make you smile.

Enough about smiles. What I really want to talk about is the **q** tag. We're all familiar with **blockquote**, but who actually use the **q** tag in our markup instead of actually typing in the double quotation marks? 

Well, I do. At least, I did in this post, and that's how I discovered that <code>bootstrapp.css</code> removes the quotation marks from around **q** tags. 

(If you look at the source, you'll see that I didn't always use the tag. That's because according to the <cite>specification</cite>, <q cite="http://www.w3.org/TR/html5-author/the-q-element.html">The q element represents some phrasing content quoted from another source.</q> The source is allowed to be fictional. Also, note that I cited the specification rather than linking to it, but unless I'm doing something wrong, this appears to be something that only those of you using screen readers can thank me for.)

After undoing the style reset, I wanted to figure out why this little tag is so unloved. I'm obviously late to the party and lots of people know about **q** and don't like it. Indeed, this [article on A List Apart](http://alistapart.com/article/qtag) about **q** tags has actually had the quotation marks removed by the CSS of the page. Since the article is about using CSS to override **q** so that it doesn't show the quotation marks, I'm sure the author must feel validated. 

But why the animosity? Why is it the industry standard to pretend that **q** doesn't exist? Is it because he was an [obnoxious Star Trek character](http://en.wikipedia.org/wiki/Q_(Star_Trek))? No. It's because IE didn't support them, and the alternative was to use JavaScript to reanimate the marks. So the tag has effectively disappeared, despite being a standards-compliant feature that's implemented by all sane browsers (including Lynx and IE10).

Fortunately, in the HTML5 world of semantic goodness, **q** may be making a comeback. HTML5 Doctor (tagline: <q>Helping You Implement HTML5 Today</q>) has an [article](http://html5doctor.com/blockquote-q-cite/) about it. That's great, and I'm happy to see the love, but this isn't HTML5 any more than CSS3 is HTML5. In fact, I discovered **q** because it is the subject of the first Google result for [HTML10](https://www.google.com/search?q=HTML10), the [tenth article](http://nhsdesigns.com/web/html/html_10.php) in a high school series about HTML.

This is another way that HTML5 stays new. Ten years ago, when The Ataris' "The Boys of Summer" came out, I had no idea that it was a cover of a Don Henley song that is now almost thirty years old. The Atari version will always be new, just because there's something old to compare it to. HTML5 will always be new, because in practice, it encompasses any web feature that was forgotten and then remembered once some movement - in **q**'s case, the push for semantic meaning - makes it popular again.

Of course, that argument doesn't really explain why CSS3 is considered part of HTML5, but the point is the same. For all practical purposes, just save yourself the pedantic argument and accept that HTML5 encompasses everything.

Because of this, I don't expect that HTML6 will ever exist in a meaningful way. Maybe some specification will be created, but as long as features are added and adopted by browsers slowly and steadily, people will always say, <q>Oh, that's new, is that part of HTML5?</q> If you try to explain that it's not, that it's really HTML &gt;5, they'll assume that you must be one of those people who listen to bands that [dress up like this](http://userserve-ak.last.fm/serve/_/51989273/Fitz+and+the+Tantrums+fatt2.png), and they will happily ignore you while they fiddle with their mobile smiles.
