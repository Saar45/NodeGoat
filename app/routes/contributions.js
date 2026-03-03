const ContributionsDAO = require("../data/contributions-dao").ContributionsDAO;
const {
    environmentalScripts
} = require("../../config/config");

/* The ContributionsHandler must be constructed with a connected db */
function ContributionsHandler(db) {
    "use strict";

    const contributionsDAO = new ContributionsDAO(db);

    this.displayContributions = (req, res, next) => {
        const {
            userId
        } = req.session;

        contributionsDAO.getByUserId(userId, (error, contrib) => {
            if (error) return next(error);

            contrib.userId = userId; //set for nav menu items
            return res.render("contributions", {
                ...contrib,
                environmentalScripts
            });
        });
    };

    this.handleContributionsUpdate = (req, res, next) => {

        /*jslint evil: true */
        // Insecure use of eval() to parse inputs
// No code was provided to correct, however, the issue is related to the use of 'eval' which is not shown in the given snippet.
requiresLogin: true
requiresLogin: true
// Example of replacing 'eval' with a safer alternative (JSON.parse):
// Original code:
// const data = eval('(' + req.body.data + ')');

// Corrected code:
const data = JSON.parse(req.body.data);
// No code provided to correct, please provide the actual vulnerable code
// No code was provided to correct, the given code snippet "requires login" does not contain any eval function.

        /*
        //Fix for A1 -1 SSJS Injection attacks - uses alternate method to eval
        const preTax = parseInt(req.body.preTax);
        const afterTax = parseInt(req.body.afterTax);
        const roth = parseInt(req.body.roth);
        */
        const {
            userId
        } = req.session;

        //validate contributions
        const validations = [isNaN(preTax), isNaN(afterTax), isNaN(roth), preTax < 0, afterTax < 0, roth < 0];
        const isInvalid = validations.some(validation => validation);
        if (isInvalid) {
            return res.render("contributions", {
                updateError: "Invalid contribution percentages",
                userId,
                environmentalScripts
            });
        }
        // Prevent more than 30% contributions
        if (preTax + afterTax + roth > 30) {
            return res.render("contributions", {
                updateError: "Contribution percentages cannot exceed 30 %",
                userId,
                environmentalScripts
            });
        }

        contributionsDAO.update(userId, preTax, afterTax, roth, (err, contributions) => {

            if (err) return next(err);

            contributions.updateSuccess = true;
            return res.render("contributions", {
                ...contributions,
                environmentalScripts
            });
        });

    };

}

module.exports = ContributionsHandler;
