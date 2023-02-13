# jQuery_accordion dynamic and automatic
the script creates an accordion from the text inserted into the text field; the script works dynamically and automatically, regardless of the length of the text and the number of H2 headings; the text field has the ID category-description; the script finds the H2 header and all the elements between the h2 header and the next H2 header and inserts into the div with the assigned content class, the plus element is also attached, which is in the additionally created div together with the h2 header, the header becomes the accordion title, pressing the plus and header hides and displays the subordinate div containing all elements between the h2 headers; a style code is also added to edit the appearance of the diva directly, the script works on the following "siblings" elements: plus the first next sibling; headline second next siblings; skypt is used on the purite.pl website in the category descriptions

## IMPORTANT !!!
		jQuery('.elementor-widget-container div').addClass('panel');
This is the class name of the first div above the first h2 header.
If we have any additional divs between the h2 headings, each of them will get the panel class.
