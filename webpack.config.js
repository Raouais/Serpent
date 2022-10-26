const path = require("path");

module.exports = {
    watch: true, //ceci permet de modifier ma page en temps réel avec le code quand celui-ci est enregistré 
    entry: ["babel-polyfill","./src/script.js"],
    output: {
        filename: "bundle.js"
    },
    devServer:{
        contentBase: path.resolve(__dirname, "dist"),
        open:true
    },
    module: {
        rules: [  //espécification du loader
            {
                test:/\.js$/, //vérification si le fichier est un fichier js
                exclude:/node_modules/, // les fichiers sur le module ne doit être exlus du loader
                use:{
                    loader: "babel-loader", //espécification du loader
                    options: {
                        presets: ["env"] 
                    }
                }
            }
        ]
    } 

}