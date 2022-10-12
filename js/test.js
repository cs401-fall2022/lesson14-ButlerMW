QUnit.test('Main <div> has proper styles and no <br> tags are used', function(assert) {

  var allDIVs = document.getElementsByTagName("div");
  assert.ok(allDIVs.length > 0, "At least 1 <div> exists on the page");
  var mainDIV = allDIVs[0];
  var mainDIVStyle = window.getComputedStyle(mainDIV);

  assert.equal(mainDIVStyle.backgroundColor, "rgb(240, 240, 240)",
      "Outer container has correct background color");

  const sides = ["Left", "Top", "Right", "Bottom"];
  sides.forEach((side, i) => {
      var prefix = "border" + side;
      assert.equal(mainDIVStyle[prefix + "Style"], "solid",
          "Outer container has solid border");
      assert.equal(mainDIVStyle[prefix + "Width"], "2px",
          "Outer container has border width of 2 pixels");
      var clr = mainDIVStyle[prefix + "Color"];
      assert.equal(clr, "rgb(0, 0, 255)",
          "Outer container has blue border");
  });

  assert.equal(mainDIVStyle.width, "600px",
      "Outer container has width of 600 pixels");
  assert.equal(mainDIVStyle.height, "280px",
      "Outer container has height of 280 pixels");
  sides.forEach((side, i) => {
      assert.equal(mainDIVStyle["padding" + side], "5px",
          `Outer container has ${side.toLowerCase()} padding of 5 pixels`);
  });
});

QUnit.test('Main <div> contains <h2> with proper styles', function(assert) {
  var allDIVs = document.getElementsByTagName("div");
  assert.ok(allDIVs.length > 0, "At least 1 <div> exists on the page");
  var mainDIV = allDIVs[0];

  var childH2s = mainDIV.getElementsByTagName("h2");
  assert.equal(childH2s.length, 1, "Main <div> contains a single <h2>");
  var theStyle = window.getComputedStyle(childH2s[0]);
  assert.equal(theStyle.color, "rgb(0, 0, 255)",
      "<h2> has correct font color");
  assert.equal(theStyle.fontStyle, "italic",
      "<h2> has italic font style");
});

QUnit.test('Yellow <div> has proper styles', function(assert) {
  var allDIVs = document.getElementsByTagName("div");
  assert.ok(allDIVs.length > 0, "At least 1 <div> exists on the page");
  var yellowDIV = allDIVs[1];

  const expectedText = "Yesterday, All those backups seemed a waste of pay. " + 
      "Now my database has gone away. Oh I believe in yesterday.";
  assert.equal(yellowDIV.innerText, expectedText,
      "Yellow container contains expected verse text");
  var theStyle = window.getComputedStyle(yellowDIV);
  assert.equal(theStyle.backgroundColor, "rgb(255, 255, 0)",
      "Yellow container has correct background color");
  const sides = ["Left", "Top", "Right", "Bottom"];
  sides.forEach((side, i) => {
      assert.equal(theStyle["padding" + side], "10px",
          `Yellow container has 10 pixel ${side.toLowerCase()} padding`);
  });

  assert.equal(theStyle.float, "left", "Yellow container floats to the left");
  assert.equal(theStyle.width, "200px", "Yellow container has 200 pixel width");
  assert.equal(theStyle.marginRight, "10px", "Yellow container has 10 pixel right margin");
  assert.equal(theStyle.marginLeft, "0px", "Yellow container has 0 pixel left margin");
  assert.equal(theStyle.marginTop, "0px", "Yellow container has 0 pixel top margin");
  assert.equal(theStyle.marginBottom, "0px", "Yellow container has 0 pixel bottom margin");
});

QUnit.test('No-color <div> has proper styles', function(assert) {
  var allDIVs = document.getElementsByTagName("div");
  assert.ok(allDIVs.length > 0, "At least 1 <div> exists on the page");
  var theDIV = allDIVs[2];
  const expectedText = "Suddenly, There's not half the files there used to be, And there's a " + 
      "milestone hanging over me. The system crashed so suddenly. I pushed something wrong, " + 
      "What it was I could not say.";
  assert.equal(theDIV.innerText, expectedText,
      "No-color container contains expected verse text");
  var theStyle = window.getComputedStyle(theDIV);
  assert.equal(theStyle.backgroundColor, "rgba(0, 0, 0, 0)",
      "No-color container has correct background color");
  assert.equal(theStyle.float, "none",
      "No-color container has default float style");
});

QUnit.test('Orange <div> has proper styles', function(assert) {
  var allDIVs = document.getElementsByTagName("div");
  assert.ok(allDIVs.length > 0, "At least 1 <div> exists on the page");
  var orangeDIV = allDIVs[3];
  const expectedText = "Now all my data's gone and I long for yesterday-ay-ay-ay.";
  assert.equal(orangeDIV.innerText, expectedText,
      "Orange container contains expected verse text");
  var theStyle = window.getComputedStyle(orangeDIV);
  assert.equal(theStyle.backgroundColor, "rgb(255, 165, 0)",
      "Orange container has correct background color");
  assert.equal(theStyle.position, "absolute", "Orange container uses absolute positioning");
  assert.equal(theStyle.left, "110px", "Orange container's left position is 110 pixels");
  assert.equal(theStyle.top, "200px", "Orange container's top position is 200 pixels");
  assert.equal(theStyle.float, "none", "Orange container has default float (none)");
  assert.equal(theStyle.width, "200px", "Orange container has 200 pixel width");

  const sides = ["Left", "Top", "Right", "Bottom"];
  sides.forEach((side, i) => {
      assert.equal(theStyle["padding" + side], "10px",
          `Orange container has 10 pixel ${side.toLowerCase()} padding`);
  });
});

QUnit.test('Orange-red <div> has proper styles', function(assert) {
  var allDIVs = document.getElementsByTagName("div");
  assert.ok(allDIVs.length > 0, "At least 1 <div> exists on the page");
  var orDIV = allDIVs[4];
  const expectedText = "Yesterday, The need for back-ups seemed so far away. I knew " + 
      "my data was all here to stay, Now I believe in yesterday.";
  assert.equal(orDIV.innerText, expectedText,
      "Orange-red container contains expected verse text");
  var theStyle = window.getComputedStyle(orDIV);
  assert.equal(theStyle.backgroundColor, "rgb(255, 80, 0)",
      "Orange-red container has correct background color");
  assert.equal(theStyle.color, "rgb(255, 255, 255)",
      "Orange-red container has correct text color");
  assert.equal(theStyle.float, "right", "Orange-red container floats right");
  assert.equal(theStyle.width, "200px", "Orange-red container has 200 pixel width");
  const sides = ["Left", "Top", "Right", "Bottom"];
  sides.forEach((side, i) => {
      assert.equal(theStyle["padding" + side], "10px",
          `Orange-red container has 10 pixel ${side.toLowerCase()} padding`);
  });

  assert.equal(theStyle.marginRight, "40px", "Orange-red container has 40 pixel right margin");
  assert.equal(theStyle.marginLeft, "0px", "Orange-red container has 0 pixel left margin");
  assert.equal(theStyle.marginTop, "20px", "Orange-red container has 20 pixel top margin");
  assert.equal(theStyle.marginBottom, "0px", "Orange-red container has 0 pixel bottom margin");
});