let splide = new Splide( '.splide', {
	type: 'slide',
	perPage: 3,
	focus: 0,
	omitEnd: true,
	perMove: 1,
	pagination: false,
	breakpoints : {
		640: {
			perPage: 1,
		},
		767: {
			perPage: 2,
		},
		1024: {
			perPage: 3,
		},
	},
});
splide.mount(); 

const tcuBlock = document.getElementById('tcu-resultsrow');
const carouselContainer = document.getElementById('carouselContainer');
// Questions
const tcuQuestionOne = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 1</strong></p> <h3 class="brand-primary-text-color">Which of the following options best describes your circumstances?</h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans1" name="question1" id="1_1"> </div> <div style="display:inline;"> <label for="1_1">Diagnosed with Secondary Breast Cancer</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans2" name="question1" id="1_2"> </div> <div style="display:inline;"> <label for="1_2">Diagnosed with Primary Breast Cancer</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans3" name="question1" id="1_3"> </div> <div style="display:inline;"> <label for="1_3">Know or care for somebody diagnosed with Primary Breast Cancer</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans4" name="question1" id="1_4"> </div> <div style="display:inline;"> <label for="1_4">Know or care for somebody diagnosed with Secondary Breast Cancer</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" class="button--left" style="margin-top: 25px; display: none;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Next question &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div>';
const tcuQuestionTwoA = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 2A</strong></p> <h3 class="brand-primary-text-color">How long have you been diagnosed with Secondary Breast Cancer?</h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans1" name="question2a" id="2a_1"> </div> <div style="display:inline;"> <label for="2a_1">Less than one year</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans2" name="question2a" id="2a_2"> </div> <div style="display:inline;"> <label for="2a_2">More than one year</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display: block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected(); ">Next question &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div> </div>';
const tcuQuestionTwoB = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 2B</strong></p> <h3 class="brand-primary-text-color">How long have you been diagnosed with Primary Breast Cancer?</h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans1" name="question2b" id="2b_1"> </div> <div style="display:inline;"> <label for="2b_1">Less than one year</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans2" name="question2b" id="2b_2"> </div> <div style="display:inline;"> <label for="2b_2">More than one year</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display: block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected(); ">Next question &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div> </div>';
const tcuQuestionTwoC = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 2C</strong></p> <h3 class="brand-primary-text-color">Which of the following options best describes how you feel about knowing and/or caring for somebody with Primary Breast Cancer? <small>(select all that apply)</small></h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans1" name="question2c" id="2c_1"> </div> <div style="display:inline;"> <label for="2c_1">Overwhelmed</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans2" name="question2c" id="2c_2"> </div> <div style="display:inline;"> <label for="2c_2">Struggling</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans3" name="question2c" id="2c_3"> </div> <div style="display:inline;"> <label for="2c_3">Isolated</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans4" name="question2c" id="2c_4"> </div> <div style="display:inline;"> <label for="2c_4">Sad</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans5" name="question2c" id="2c_5"> </div> <div style="display:inline;"> <label for="2c_5">Under informed</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans6" name="question2c" id="2c_6"> </div> <div style="display:inline;"> <label for="2c_6">None of these</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Next question &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div> </div>';
const tcuQuestionTwoD = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 2D</strong></p> <h3 class="brand-primary-text-color">Which of the following options best describes how you feel about knowing and/or caring for somebody with Secondary Breast Cancer? <small>(select all that apply)</small></h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans1" name="question2d" id="2d_1"> </div> <div style="display:inline;"> <label for="2d_1">Overwhelmed</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans2" name="question2d" id="2d_2"> </div> <div style="display:inline;"> <label for="2d_2">Struggling</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans3" name="question2d" id="2d_3"> </div> <div style="display:inline;"> <label for="2d_3">Isolated</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans4" name="question2d" id="2d_4"> </div> <div style="display:inline;"> <label for="2d_4">Sad</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans5" name="question2d" id="2d_5"> </div> <div style="display:inline;"> <label for="2d_5">Under informed</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans6" name="question2d" id="2d_6"> </div> <div style="display:inline;"> <label for="2d_6">None of these</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Next question &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div> </div>';
const tcuQuestionThreeA = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 3A</strong></p> <h3 class="brand-primary-text-color">Which of these best describes how you felt after being diagnosed with Secondary Breast Cancer? <small>(select all that apply)</small></h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans1" name="question3a" id="3a_1"> </div> <div style="display:inline;"> <label for="3a_1">Overwhelmed</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans2" name="question3a" id="3a_2"> </div> <div style="display:inline;"> <label for="3a_2">Struggling</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans3" name="question3a" id="3a_3"> </div> <div style="display:inline;"> <label for="3a_3">Isolated</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans4" name="question3a" id="3a_4"> </div> <div style="display:inline;"> <label for="3a_4">Coping</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans5" name="question3a" id="3a_5"> </div> <div style="display:inline;"> <label for="3a_5">Scared</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans6" name="question3a" id="3a_6"> </div> <div style="display:inline;"> <label for="3a_6">Accepting</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans7" name="question3a" id="3a_7"> </div> <div style="display:inline;"> <label for="3a_7">Angry</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans8" name="question3a" id="3a_8"> </div> <div style="display:inline;"> <label for="3a_8">Isolated</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Next question &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div> </div>';
const tcuQuestionThreeB = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 3B</strong></p> <h3 class="brand-primary-text-color">Which of these best describes how you feel about living with Secondary Breast Cancer? <small>(select all that apply)</small></h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans1" name="question3b" id="3b_1"> </div> <div style="display:inline;"> <label for="3b_1">Overwhelmed</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans2" name="question3b" id="3b_2"> </div> <div style="display:inline;"> <label for="3b_2">Struggling</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans3" name="question3b" id="3b_3"> </div> <div style="display:inline;"> <label for="3b_3">Isolated</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans4" name="question3b" id="3b_4"> </div> <div style="display:inline;"> <label for="3b_4">Coping</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans5" name="question3b" id="3b_5"> </div> <div style="display:inline;"> <label for="3b_5">Scared</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans6" name="question3b" id="3b_6"> </div> <div style="display:inline;"> <label for="3b_6">Accepting</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans7" name="question3b" id="3b_7"> </div> <div style="display:inline;"> <label for="3b_7">Angry</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans8" name="question3b" id="3b_8"> </div> <div style="display:inline;"> <label for="3b_8">Isolated</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Next question &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div> </div>';
const tcuQuestionThreeC = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 3C</strong></p> <h3 class="brand-primary-text-color">Which of these best describes how you felt after being diagnosed with Primary Breast Cancer? <small>(select all that apply)</small></h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans1" name="question3c" id="3c_1"> </div> <div style="display:inline;"> <label for="3c_1">Overwhelmed</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans2" name="question3c" id="3c_2"> </div> <div style="display:inline;"> <label for="3c_2">Struggling</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans3" name="question3c" id="3c_3"> </div> <div style="display:inline;"> <label for="3c_3">Isolated</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans4" name="question3c" id="3c_4"> </div> <div style="display:inline;"> <label for="3c_4">Coping</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans5" name="question3c" id="3c_5"> </div> <div style="display:inline;"> <label for="3c_5">Scared</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans6" name="question3c" id="3c_6"> </div> <div style="display:inline;"> <label for="3c_6">Accepting</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans7" name="question3c" id="3c_7"> </div> <div style="display:inline;"> <label for="3c_7">Angry</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans8" name="question3c" id="3c_8"> </div> <div style="display:inline;"> <label for="3c_8">Isolated</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected(); ">Next question &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div>';
const tcuQuestionThreeD = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 3D</strong></p> <h3 class="brand-primary-text-color">Which of these best describes how you feel about living with Primary Breast Cancer? <small>(select all that apply)</small></h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans1" name="question3d" id="3d_1"> </div> <div style="display:inline;"> <label for="3d_1">Overwhelmed</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans2" name="question3d" id="3d_2"> </div> <div style="display:inline;"> <label for="3d_2">Struggling</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans3" name="question3d" id="3d_3"> </div> <div style="display:inline;"> <label for="3d_3">Isolated</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans4" name="question3d" id="3d_4"> </div> <div style="display:inline;"> <label for="3d_4">Coping</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans5" name="question3d" id="3d_5"> </div> <div style="display:inline;"> <label for="3d_5">Scared</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans6" name="question3d" id="3d_6"> </div> <div style="display:inline;"> <label for="3d_6">Accepting</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans7" name="question3d" id="3d_7"> </div> <div style="display:inline;"> <label for="3d_7">Angry</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans8" name="question3d" id="3d_8"> </div> <div style="display:inline;"> <label for="3d_8">Isolated</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Next question &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div>';
const tcuQuestionThreeE = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 3E</strong></p> <h3 class="brand-primary-text-color">Are there any topics you would like to learn more about to better help the person you know with Primary Breast Cancer? <small>(select all that apply)</small></h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans1" name="question3e" id="3e_1"> </div> <div style="display:inline;"> <label for="3e_1">Medical terminology</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans2" name="question3e" id="3e_2"> </div> <div style="display:inline;"> <label for="3e_2">Disease progression</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans3" name="question3e" id="3e_3"> </div> <div style="display:inline;"> <label for="3e_3">Treatment options</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans4" name="question3e" id="3e_4"> </div> <div style="display:inline;"> <label for="3e_4">Understanding diagnosis</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans5" name="question3e" id="3e_5"> </div> <div style="display:inline;"> <label for="3e_5">Biomarkers and genetic mutations</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans6" name="question3e" id="3e_6"> </div> <div style="display:inline;"> <label for="3e_6">Healthcare teams</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans7" name="question3e" id="3e_7"> </div> <div style="display:inline;"> <label for="3e_7">Menopause and fertility</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans8" name="question3e" id="3e_8"> </div> <div style="display:inline;"> <label for="3e_8">Intimacy</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans9" name="question3e" id="3e_9"> </div> <div style="display:inline;"> <label for="3e_9">I\'m not sure</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Submit &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div>';
const tcuQuestionThreeF = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 3F</strong></p> <h3 class="brand-primary-text-color">Are there any topics you would like to learn more about to better help the person you know with Secondary Breast Cancer? <small>(select all that apply)</small></h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans1" name="question3f" id="3f_1"> </div> <div style="display:inline;"> <label for="3f_1">Medical terminology</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans2" name="question3f" id="3f_2"> </div> <div style="display:inline;"> <label for="3f_2">Disease progression</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans3" name="question3f" id="3f_3"> </div> <div style="display:inline;"> <label for="3f_3">Treatment options</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans4" name="question3f" id="3f_4"> </div> <div style="display:inline;"> <label for="3f_4">Understanding diagnosis</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans5" name="question3f" id="3f_5"> </div> <div style="display:inline;"> <label for="3f_5">Biomarkers and genetic mutations</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans6" name="question3f" id="3f_6"> </div> <div style="display:inline;"> <label for="3f_6">Healthcare teams</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans7" name="question3f" id="3f_7"> </div> <div style="display:inline;"> <label for="3f_7">Menopause and fertility</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans8" name="question3f" id="3f_8"> </div> <div style="display:inline;"> <label for="3f_8">Intimacy</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans9" name="question3f" id="3f_9"> </div> <div style="display:inline;"> <label for="3f_9">I\'m not sure</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Submit &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div>';
const tcuQuestionFourA = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 4A</strong></p> <h3 class="brand-primary-text-color">Are there any areas of life with Secondary Breast Cancer where you feel you could use more information? <small>(select all that apply)</small></h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans1" name="question4a" id="4a_1"> </div> <div style="display:inline;"> <label for="4a_1">Treatment options</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans2" name="question4a" id="4a_2"> </div> <div style="display:inline;"> <label for="4a_2">Biomarkers and genetic mutations</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans3" name="question4a" id="4a_3"> </div> <div style="display:inline;"> <label for="4a_3">Medical terminology</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans4" name="question4a" id="4a_4"> </div> <div style="display:inline;"> <label for="4a_4">Understanding diagnosis</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans5" name="question4a" id="4a_5"> </div> <div style="display:inline;"> <label for="4a_5">Disease progression</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans6" name="question4a" id="4a_6"> </div> <div style="display:inline;"> <label for="4a_6">How to communicate with your healthcare team</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans7" name="question4a" id="4a_7"> </div> <div style="display:inline;"> <label for="4a_7">Menopause and fertility</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans8" name="question4a" id="4a_8"> </div> <div style="display:inline;"> <label for="4a_8">Overall survival</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans9" name="question4a" id="4a_9"> </div> <div style="display:inline;"> <label for="4a_9">I\'m not sure</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Next question &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div>';
const tcuQuestionFourB = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 4B</strong></p> <h3 class="brand-primary-text-color">What areas would you like to learn more about? <small>(select all that apply)</small></h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans1" name="question4b" id="4b_1"> </div> <div style="display:inline;"> <label for="4b_1">Primary and secondary defined</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans2" name="question4b" id="4b_2"> </div> <div style="display:inline;"> <label for="4b_2">Understanding diagnosis</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans3" name="question4b" id="4b_3"> </div> <div style="display:inline;"> <label for="4b_3">Treatment options/decisions</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans4" name="question4b" id="4b_4"> </div> <div style="display:inline;"> <label for="4b_4">Disease progression</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans5" name="question4b" id="4b_5"> </div> <div style="display:inline;"> <label for="4b_5">Communication with your healthcare team</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans6" name="question4b" id="4b_6"> </div> <div style="display:inline;"> <label for="4b_6">Patient groups</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans7" name="question4b" id="4b_7"> </div> <div style="display:inline;"> <label for="4b_7">Medical terminology</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans8" name="question4b" id="4b_8"> </div> <div style="display:inline;"> <label for="4b_8">Menopause and fertility</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans9" name="question4b" id="4b_9"> </div> <div style="display:inline;"> <label for="4b_9">Intimacy</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="checkbox" required value="ans10" name="question4b" id="4b_10"> </div> <div style="display:inline;"> <label for="4b_10">I\'m not sure</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Submit &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div>';
const tcuQuestionFiveA = '<div class="col-12 col-md-6 image"> <div class="field field--name-field-layout-1 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="center image--paragraph standard-spacing"> <div class="field field--name-field-image field--type-entity-reference field--label-hidden"><img id="cp-img" src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q1-image.webp"></div> </div> </div> </div> <div class="col-12 col-md-6 no-image"> <div class="field field--name-field-layout-2 field--type-entity-reference-revisions field--label-hidden field--layout"> <div class="paragraph paragraph--type--simple-text"> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="brand-primary-text-color"><strong>Question 5A</strong></p> <h3 class="brand-primary-text-color"><small>Overall survival is an important topic to discuss with your MDT before beginning any line of treatment</small><br>Would you like to learn more about survival?</h3> <div id="noneSelected" class="alert-block"> <small>Please select an option below:</small> </div>  <div class="clearfix"> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans1" name="question5a" id="5a_1"> </div> <div style="display:inline;"> <label for="5a_1">Yes</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans2" name="question5a" id="5a_2"> </div> <div style="display:inline;"> <label for="5a_2">No</label> </div> </div> <div class="tcu-option"> <div style="display:inline;"> <input type="radio" required value="ans3" name="question5a" id="5a_3"> </div> <div style="display:inline;"> <label for="5a_3">I don\'t know what this is</label> </div> </div> </div> <div class="clearfix"> <a id="tcu-prev" onclick="tcuPrevious();" class="button--left" style="margin-top: 25px; display:  block;">&lt; Previous</a> <a class="button secondary button--right button--secondary brand-secondary-button brand-secondary-border-button border-width-0 white-no-transition-text tcu-button" id="tcu-nextbut" onclick="noneSelected();">Submit &gt;</a> </div> </div> <div class="clearfix text-formatted field field--name-field-content field--type-text-long field--label-hidden"> <p class="clearfix text-align-right neutral-dark-grey-text-color" style="padding-top:20px;">UK | Month 2023 | ******</p> </div> </div> </div> </div>';
// Carousel Items
const carouselItems = [];
const understandingDiagnosis = '<li class="splide__slide"> <div class="splide__slide__container"> <img src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q5-image.webp"> Understanding Diagnosis </div> </li>';
const friendsAndFamily = '<li class="splide__slide"> <div class="splide__slide__container"> <img src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q5-image.webp"> Friends and Family Guide </div> </li>';
const emotionalSupport = '<li class="splide__slide"> <div class="splide__slide__container"> <img src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q5-image.webp"> Emotional and Mental Wellbeing </div> </li>';
const patientGroups = '<li class="splide__slide"> <div class="splide__slide__container"> <img src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q5-image.webp"> Patient Groups </div> </li>';
const primarySecondaryDefined = '<li class="splide__slide"> <div class="splide__slide__container"> <img src="https://www.momentsthatcount.co.uk/sites/momentsthatcount_co_uk/files/styles/slider_desktop_2880/public/2022-08/q5-image.webp"> Primary and Secondary Defined </div> </li>';

function tcuStart() {
	nextQuestion('before');
  tcuBlock.innerHTML = tcuQuestionOne;
  nextQuestion('after');
}
let currentQuestion = 1;
let variation = [];
const route = [];

function tcuNext() {
	if (currentQuestion === 1) {
		for (let q1Entry = 0; q1Entry < document.querySelectorAll(`input[name="question${currentQuestion}"]:checked`).length; q1Entry++) {
			switch (document.querySelectorAll(`input[name="question${currentQuestion}"]:checked`)[q1Entry].value) {
			case 'ans1':
				nextQuestion('before');
				tcuBlock.innerHTML = tcuQuestionTwoA;
				nextQuestion('after')
				variation.push('2a');
				currentQuestion++;
				break;
			case 'ans2':
				nextQuestion('before');
				tcuBlock.innerHTML = tcuQuestionTwoB;
				nextQuestion('after');
				variation.push('2b');
				currentQuestion++;
				break;
			case 'ans3':
				nextQuestion('before');
				tcuBlock.innerHTML = tcuQuestionTwoC;
				nextQuestion('after');
				variation.push('2c');
				// Code for carousel
				splide.add(friendsAndFamily);
				carouselItems.push(`${currentQuestion}a`);
				currentQuestion++;
				// Slide Animation TEST
				newCarouselSlide();
				break;
			case 'ans4':
				nextQuestion('before');
				tcuBlock.innerHTML = tcuQuestionTwoD;
				nextQuestion('after');
				variation.push('2d');
				// Code for carousel
				splide.add(friendsAndFamily);
				carouselItems.push(`${currentQuestion}a`);
				currentQuestion++;
				break;
			}
		}
	route.push(tcuQuestionOne);
	return;
	}
	// Question 2
	if (currentQuestion === 2) {
		// Question 2A
		if (variation[0] === '2a') {
			for (let q2aEntry = 0; q2aEntry < document.querySelectorAll(`input[name="question${currentQuestion}a"]:checked`).length; q2aEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}a"]:checked`)[q2aEntry].value) {
				case 'ans1':
					nextQuestion('before');
					tcuBlock.innerHTML = tcuQuestionThreeA;
					nextQuestion('after');
					variation.push('3a');
					currentQuestion++;
					// Code for carousel
					splide.add(understandingDiagnosis);
					carouselItems.push(variation[0]);					
					break;
				case 'ans2':
					nextQuestion('before');
					tcuBlock.innerHTML = tcuQuestionThreeB;
					nextQuestion('after');
					variation.push('3b');
					currentQuestion++;
					break;
				}
			}
		route.push(tcuQuestionTwoA);
		}
		// Question 2B
		if (variation[0] === '2b') {
			for (let q2bEntry = 0; q2bEntry < document.querySelectorAll(`input[name="question${currentQuestion}b"]:checked`).length; q2bEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}b"]:checked`)[q2bEntry].value) {
				case 'ans1':
					nextQuestion('before');
					tcuBlock.innerHTML = tcuQuestionThreeC;
					nextQuestion('after');
					variation.push('3c');
					currentQuestion++;
					// Code For carousel (same as 2A)
					splide.add(understandingDiagnosis);
					carouselItems.push(variation[0]);
					break;
				case 'ans2':
					nextQuestion('before');
					tcuBlock.innerHTML = tcuQuestionThreeD;
					nextQuestion('after');
					variation.push('3d');
					currentQuestion++;
					break;
				}
			}
		route.push(tcuQuestionTwoB);
		}
		// Question 2C
		if (variation[0] === '2c') {
			for (let q2cEntry = 0; q2cEntry < document.querySelectorAll(`input[name="question${currentQuestion}c"]:checked`).length; q2cEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}c"]:checked`)[q2cEntry].value) {
					case 'ans1':
					case 'ans2':
					case 'ans3':
					case 'ans4':
					case 'ans5':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionThreeE;
						nextQuestion('after');
						variation.push('3e');
						currentQuestion++;
						// Code for carousel
						splide.add(emotionalSupport);
						carouselItems.push(variation[0]);
						newCarouselSlide();
						break;
					case 'ans6':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionThreeE;
						nextQuestion('after');
						variation.push('3e');
						currentQuestion++;
				}
			}
		route.push(tcuQuestionTwoC);
		}
		if (variation[0] === '2d') {
			for (let q2dEntry = 0; q2dEntry < document.querySelectorAll(`input[name="question${currentQuestion}d"]:checked`).length; q2dEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}d"]:checked`)[q2dEntry].value) {
					case 'ans1':
					case 'ans2':
					case 'ans3':
					case 'ans4':
					case 'ans5':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionThreeF;
						nextQuestion('after');
						variation.push('3f');
						currentQuestion++;
						// Code for carousel
						splide.add(emotionalSupport);
						carouselItems.push(variation[0]);
						break;
					case 'ans6':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionThreeF;
						nextQuestion('after');
						variation.push('3f');
						currentQuestion++;
						// empty
						break;
				}
			}
		route.push(tcuQuestionTwoD);
		}
	return;
	}
	// Question 3
	if (currentQuestion === 3) {
		if (variation[1] === '3a') {
			for (let q3aEntry = 0; q3aEntry < document.querySelectorAll(`input[name="question${currentQuestion}a"]:checked`).length; q3aEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}a"]:checked`)[q3aEntry].value) {
					case 'ans1':
					case 'ans2':
					case 'ans3':
					case 'ans4':
					case 'ans5':
					case 'ans7':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionFourA;
						nextQuestion('after');
						variation.push('4a');
						currentQuestion++;
						// Code for carousel
						splide.add(emotionalSupport);
						splide.add(patientGroups);
						carouselItems.push(variation[1]);
						carouselItems.push(variation[1]);
						break;
					case 'ans6':
					case 'ans8':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionFourA;
						nextQuestion('after');
						variation.push('4a');
						currentQuestion++;
						// empty
						break;
				}
			}
		route.push(tcuQuestionThreeA);
		}
		if (variation[1] === '3b') {
			for (let q3bEntry = 0; q3bEntry < document.querySelectorAll(`input[name="question${currentQuestion}b"]:checked`).length; q3bEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}b"]:checked`)[q3bEntry].value) {
					case 'ans1':
					case 'ans2':
					case 'ans3':
					case 'ans4':
					case 'ans5':
					case 'ans7':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionFourA;
						nextQuestion('after');
						variation.push('4a');
						currentQuestion++;
						// Code for carousel
						splide.add(emotionalSupport);
						splide.add(patientGroups);
						carouselItems.push(variation[1]);
						carouselItems.push(variation[1]);
						break;
					case 'ans6':					
					case 'ans8':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionFourA;
						nextQuestion('after');
						variation.push('4a');
						currentQuestion++;
						// empty
						break;
				}
			}
		route.push(tcuQuestionThreeB);
		}
		if (variation[1] === '3c') {
			for (let q3cEntry = 0; q3cEntry < document.querySelectorAll(`input[name="question${currentQuestion}c"]:checked`).length; q3cEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}c"]:checked`)[q3cEntry].value) {
					case 'ans1':
					case 'ans2':
					case 'ans3':
					case 'ans4':
					case 'ans5':
					case 'ans7':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionFourB;
						nextQuestion('after');
						variation.push('4b');
						currentQuestion++;
						// Code for carousel
						splide.add(emotionalSupport);
						splide.add(patientGroups);
						carouselItems.push(variation[1]);
						carouselItems.push(variation[1]);
						break;
					case 'ans6':
					case 'ans8':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionFourB;
						nextQuestion('after');
						variation.push('4b');
						currentQuestion++;
						// empty
						break;
				}
			}
		route.push(tcuQuestionThreeC);
		}
		if (variation[1] === '3d') {
			for (let q3dEntry = 0; q3dEntry < document.querySelectorAll(`input[name="question${currentQuestion}d"]:checked`).length; q3dEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}d"]:checked`)[q3dEntry].value) {
					case 'ans1':
					case 'ans2':
					case 'ans3':
					case 'ans4':
					case 'ans5':
					case 'ans7':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionFourB;
						nextQuestion('after');
						variation.push('4b');
						currentQuestion++;
						// Code for carousel
						splide.add(emotionalSupport);
						splide.add(patientGroups);
						carouselItems.push(variation[1]);
						carouselItems.push(variation[1]);
						break;
					case 'ans6':
					case 'ans8':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionFourB;
						nextQuestion('after');
						variation.push('4b');
						currentQuestion++;
						// empty
						break;
				}
			}
		route.push(tcuQuestionThreeD);
		}
		if (variation[1] === '3e') {
			for (let q3eEntry = 0; q3eEntry < document.querySelectorAll(`input[name="question${currentQuestion}e"]:checked`).length; q3eEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}e"]:checked`)[q3eEntry].value) {
					case 'ans1':
					case 'ans2':
					case 'ans3':
					case 'ans4':
					case 'ans5':
					case 'ans7':
					case 'ans8':
						// Code for carousel
						nextQuestion('before');
						tcuSubmit();
						break;
					case 'ans9':
						// Code for carousel
						splide.add(primarySecondaryDefined);
						carouselItems.push(variation[1]);
						nextQuestion('before');
						tcuSubmit();
						break;
				}
			}
		// END OF QUESTIONNAIRE CODE (JOHN)
		}
		if (variation[1] === '3f') {
			for (let q3fEntry = 0; q3fEntry < document.querySelectorAll(`input[name="question${currentQuestion}f"]:checked`).length; q3fEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}f"]:checked`)[q3fEntry].value) {
					case 'ans1':
					case 'ans2':
					case 'ans3':
					case 'ans4':
					case 'ans5':
					case 'ans7':
					case 'ans8':
						// Code for carousel
						nextQuestion('before');
						tcuSubmit();
						break;
					case 'ans9':
						// Code for carousel
						splide.add(primarySecondaryDefined);
						carouselItems.push(variation[1]);
						nextQuestion('before');
						tcuSubmit();
						break;
				}
			}
		// END OF QUESTIONNAIRE CODE (JOHN)
		}
	return;
	}
	// Question 4
	if (currentQuestion === 4) {
		if (variation[2] === '4a') {
			for (let q4aEntry = 0; q4aEntry < document.querySelectorAll(`input[name="question${currentQuestion}a"]:checked`).length; q4aEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}a"]:checked`)[q4aEntry].value) {
					case 'ans1':
					case 'ans2':
					case 'ans3':
					case 'ans4':
					case 'ans5':
					case 'ans6':
					case 'ans8':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionFiveA;
						nextQuestion('after');
						variation.push('5a');
						currentQuestion++;
						// Code for carousel
						break;
					case 'ans9':
						nextQuestion('before');
						tcuBlock.innerHTML = tcuQuestionFiveA;
						variation.push('5a');
						nextQuestion('after');
						currentQuestion++;
						// Code for carousel
						splide.add(primarySecondaryDefined);
						carouselItems.push(variation[2]);
						break;
				}
			}
		route.push(tcuQuestionFourA);
		}
		if (variation[2] === '4b') {
			for (let q4bEntry = 0; q4bEntry < document.querySelectorAll(`input[name="question${currentQuestion}b"]:checked`).length; q4bEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}b"]:checked`)[q4bEntry].value) {
					case 'ans1':
					case 'ans2':
					case 'ans3':
					case 'ans4':
					case 'ans5':
					case 'ans6':
					case 'ans8':
						nextQuestion('before');
						tcuSubmit();
						// Code for carousel
						break;
					case 'ans9':
						nextQuestion('before');
						tcuSubmit();
						// Code for carousel
						splide.add(primarySecondaryDefined);
						carouselItems.push(variation[2]);
						break;
				}
			}
		route.push(tcuQuestionFourB);
		}
	}
	// Question 5
	if (currentQuestion === 5) {
		if (variation[3] === '5a') {
			for (let q5aEntry = 0; q5aEntry < document.querySelectorAll(`input[name="question${currentQuestion}a"]:checked`).length; q5aEntry++) {
				switch (document.querySelectorAll(`input[name="question${currentQuestion}a"]:checked`)[q5aEntry].value) {
					case 'ans1':
					case 'ans3':
						// Code for carousel
						nextQuestion('before');
						tcuSubmit();
						break;
					case 'ans2':
						// empty
						nextQuestion('before');
						tcuSubmit();
						break;
				}
			}
		}
	}
}

function tcuPrevious() {
	const currentLength = route.length - 1;
	tcuBlock.innerHTML = route[currentLength];
	route.pop();
	variation.pop();
	currentQuestion--;
	// Carousel
	if (splide.Components.Slides.get().length > 0) {
		for (let i = 0; i < carouselItems.length; i++) {
			if (carouselItems[i][0].includes(currentQuestion)) {
				// Make Slide non-visible animation
				slideToRemoveIndex = splide.Components.Slides.get().length - 1;
				slideToRemoveID = splide.Components.Slides.getAt(slideToRemoveIndex).slide.id;
				slideToRemove = document.getElementById(slideToRemoveID);
				let removeCtr = 0;
				fadeOut();
				window.setTimeout(function() {
					slideToRemove.style.display = 'none';
				},175);
				function fadeOut() {
					slideToRemove.style.opacity = 1 - ('0.'+removeCtr);
					slideToRemove.style.transform = 'scale('+(1 - ('0.'+removeCtr))+')';
					removeCtr++;
					if (removeCtr < 10) {
						requestAnimationFrame(fadeOut);
					} else {
						removeCtr = 0;
					}
				}
				// Wait before removing from carousel
				window.setTimeout(function() {
					splide.remove(i);
					carouselItems.pop();
				}, 1000)
			}
		}
	}
	// Carousel DISAPPEAR
	if (splide.Components.Slides.get().length === 0 || tcuBlock.innerHTML === tcuQuestionOne || currentQuestion === 1) {
		// carouselContainer.style.display = "none";
		let tcr = 0;
		carouselContainer.className = carouselContainer.className !== 'show' ? 'show' : 'hide';
		if (carouselContainer.className === 'hide') {
			fadeOut();
			window.setTimeout(function() {
				carouselContainer.style.display = 'none';
			}, 175);
		}
		function fadeOut() {
			carouselContainer.opacity = 1 - ('0.'+tcr);
			carouselContainer.style.transform = 'scale('+(1 - ('0.'+tcr))+')';
			tcr++;
			if (tcr < 10) {
				requestAnimationFrame(fadeOut);
			} else {
				tcr = 0;
			}
		}
	}
}

function noneSelected() {
	const buttonsChecked = document.querySelectorAll('input');
	let nOfButtons = 0;
	for (let button of buttonsChecked) {
		if (button.checked) {
			nOfButtons++;
		}
	}
	if (nOfButtons > 0) {
		tcuNext();
	} else {
		const userAlert = document.getElementById('noneSelected');
		userAlert.style.display = "block";
	}
	// Carousel APPEAR
	if (splide.Components.Slides.get().length > 0) {
		// carouselContainer.style.display = "block";
		if (carouselContainer.className === 'hide') {
			let ctr = 0;
			carouselContainer.className = carouselContainer.className !== 'show' ? 'show' : 'hide';
			if (carouselContainer.className === 'show') {
				window.setTimeout(function() {
					carouselContainer.style.display = 'block';
					fadeIn();
				},300);
			}
			function fadeIn() {
				carouselContainer.style.opacity = ctr !== 10 ? '0.'+ctr : 1;
				carouselContainer.style.transform = ctr !== 10 ? 'scale('+('0.'+ctr)+')' : 'scale(1)';
				ctr++;
				if (ctr < 11) {
					requestAnimationFrame(fadeIn);
				} else {
					ctr = 0;
				}
			}
		}
	}
}


function tcuSubmit() {
	// Set opacity to 0 before becoming display of none;
	window.setTimeout(function() {
		tcuBlock.style.display = "none";
	}, 1000)
}

function newCarouselSlide() {
	newSlideIndex = splide.Components.Slides.get().length - 1;
	newSlideID = splide.Components.Slides.getAt(newSlideIndex).slide.id;
	newSlide = document.getElementById(newSlideID);
	newSlide.style.display = 'none';
	let slideCtr = 0;
	window.setTimeout(function() {
		newSlide.style.display = 'block';
		fadeIn();
	},300);
	function fadeIn() {
		newSlide.style.opacity = slideCtr !== 10 ? '0.'+slideCtr : 1;
		newSlide.style.transform = slideCtr !== 10 ? 'scale('+('0.'+slideCtr)+')' : 'scale(1)';
		slideCtr++;
		if (slideCtr < 11) {
			requestAnimationFrame(fadeIn);
		} else {
			slideCtr = 0;
		}
	}
}

function nextQuestion(state) {
	if (state === 'before') {
		// fadeOut first
		let qbCtr = 0;
		fadeOut();
		window.setTimeout(function() {
			tcuBlock.style.opacity = '0';
		}, 250);
		function fadeOut() {
			tcuBlock.opacity = 1 - ('0.'+qbCtr);
			tcuBlock.style.transform = 'scale('+(1 - ('0.'+qbCtr))+')';
			qbCtr++;
			if (qbCtr < 10) {
				requestAnimationFrame(fadeOut);
			} else {
				qbCtr = 0;
			}
		}
	}
	// fadeIn new question
	if (state === 'after') {
		let qaCtr = 0;
		window.setTimeout(function() {
			fadeIn();
		}, 750);
		function fadeIn() {
			tcuBlock.style.opacity = qaCtr !== 10 ? '0.'+qaCtr : 1;
			tcuBlock.style.transform = qaCtr !== 10 ? 'scale('+('0.'+qaCtr)+')' : 'scale(1)';
			qaCtr++;
			if (qaCtr < 11) {
				requestAnimationFrame(fadeIn);
			} else {
				qaCtr = 0;
			}
		}
	}

}






