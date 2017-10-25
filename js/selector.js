/**
 * The Selector object
 */
function Selector() {
    this.mainContainer                = $(".app--main-page");

    this.menu                         = {};
    this.menu.container               = $(".app--menu-container");
    this.menu.handleContainer         = $(".app--menu-handleContainer", this.mainContainer);
    this.menu.controlsContainer       = $(".app--menu-controlsContainer", this.menu.container);
    this.menu.controlsTemplateContainer = $("#app--menu-controlsTemplateContainer");

    this.overlay                      = {};
    this.overlay.container            = $("#app--overlay-container");

    this.contact                      = {};
    this.contact.entryTemplate        = $("#app--contact-entryTemplate");
    this.contact.entryContainer       = $(".app--contact-entryContainer", this.mainContainer);

    this.contact.linkedIn             = $(".app--contact-linkedIn", this.mainContainer);

    this.experiences                  = {};
    this.experiences.titleTemplate    = $("#app--experience-titleTemplate");
    this.experiences.entryTemplate    = $("#app--experience-entryTemplate");
    this.experiences.titleContainer   = $(".app--experience-titleContainer", this.mainContainer);
    this.experiences.entryContainer   = $(".app--experience-entryContainer", this.mainContainer);

    this.knowledge                    = {};
    this.knowledge.titleTemplate      = $("#app--knowledge-titleTemplate");
    this.knowledge.entryTemplate      = $("#app--knowledge-entryTemplate");
    this.knowledge.titleContainer     = $(".app--knowledge-titleContainer", this.mainContainer);
    this.knowledge.entryContainer     = $(".app--knowledge-entryContainer", this.mainContainer);

    this.references                   = {};
    this.references.titleTemplate     = $("#app--references-titleTemplate");
    this.references.entryTemplate     = $("#app--references-entryTemplate");
    this.references.titleContainer    = $(".app--references-titleContainer", this.mainContainer);
    this.references.entryContainer    = $(".app--references-entryContainer", this.mainContainer);

    this.trainings                    = {};
    this.trainings.titleTemplate      = $("#app--trainings-titleTemplate");
    this.trainings.entryTemplate      = $("#app--trainings-entryTemplate");
    this.trainings.titleContainer     = $(".app--trainings-titleContainer", this.mainContainer);
    this.trainings.entryContainer     = $(".app--trainings-entryContainer", this.mainContainer);

    this.organizations                = {};
    this.organizations.titleTemplate  = $("#app--organizations-titleTemplate");
    this.organizations.entryTemplate  = $("#app--organizations-entryTemplate");
    this.organizations.titleContainer = $(".app--organizations-titleContainer", this.mainContainer);
    this.organizations.entryContainer = $(".app--organizations-entryContainer", this.mainContainer);

    this.languages                    = {};
    this.languages.titleTemplate      = $("#app--languages-titleTemplate");
    this.languages.entryTemplate      = $("#app--languages-entryTemplate");
    this.languages.titleContainer     = $(".app--languages-titleContainer", this.mainContainer);
    this.languages.entryContainer     = $(".app--languages-entryContainer", this.mainContainer);

    this.rewards                      = {};
    this.rewards.titleTemplate        = $("#app--rewards-titleTemplate");
    this.rewards.entryTemplate        = $("#app--rewards-entryTemplate");
    this.rewards.titleContainer       = $(".app--rewards-titleContainer", this.mainContainer);
    this.rewards.entryContainer       = $(".app--rewards-entryContainer", this.mainContainer);

    this.other                        = {};
    this.other.titleTemplate          = $("#app--other-titleTemplate");
    this.other.entryTemplate          = $("#app--other-entryTemplate");
    this.other.titleContainer         = $(".app--other-titleContainer", this.mainContainer);
    this.other.entryContainer         = $(".app--other-entryContainer", this.mainContainer);
}
