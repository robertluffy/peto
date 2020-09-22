/**
 * Factor Settings - How settings work in Factor...
 *
 * Your settings files are how you customize themes and plugins.
 * They allow you to set text and images, but also override components, routes and more.
 *
 */
export default {
	  site: {
    //components: {
      //header: (): Promise<any> => import("./header.vue"),
      //footer: (): Promise<any> => import("./footer.vue"),
    //},
    logo: require("./stock/proAdmin.png"),
    logoInverse: require("./stock/proAdmin.png"),
    nav: [
      {
        _item: "home",
        path: "/",
        name: "Inicio",
      },
      {
        _item: "solutions",
        path: "/contact",
        name: "Contacto",
      },
      {
        _item: "pricing",
        path: "/pricing",
        name: "Soporte",
      }
    ],
    /**
     * Copy for the call to action on the home page, pricing page, and about page.
     */
    cta: {
     title: "",
     content:  `Están reservados todos los derechos. Queda prohibida la reproducción, el almacenamiento en memoria electrónica o la transmisión por cualquier medio electrónico, mecánico, de fotocopiado, grabación, etc., de la totalidad o parte de esta publicación sin autorización. <i class="fas fa-rocket"></i>`,
      buttons: [
       /* {
          _item: "contact",
          link: "/contact",
          text: "Free Consultation",
          classes: "btn bg-gray-100 rounded text-purple-500 hover:bg-gray-300",
        },*/
      ],
      //figure: require("./img/cloud-with-shadow.svg"),
      footerFigureAlt: "Cloud",
    }
  },


   

	home: {
		intro: {
			title: "proAdmin",
			figure: require("./stock/intro.jpg"),
			content: "Aplicación web para la administración de proyectos. Gestion de documentacion, ingresos y egresos, atraves un control completo sobre la rentabilidad de un proyecto.",
			buttons: [
			{
			  _item: "contact",
			  link: "/login",
			  text: "Login",
			  classes: "btn mr-4 text-purple-100 bg-purple-500 hover:bg-purple-600",
			},
			{
			  _item: "pricing",
			  link: "/dashboard",
			  text: "Administrador",
			  classes:
				"btn btn-ol border-purple-700 ml-0 mt-4 md:mt-0 hover:text-purple-500 hover:border-purple-500",
			},
		  ],
		},
		logos: {
		title: "TECNOLOGIA DE TRABAJO PROADMIN:",
		list: [
        {
          _item: "aws",
          link: "https://aws.amazon.com/",
          target: "_blank",
          image: require("./stock/java.png"),
          alt: "Amazon Web Services",
        },
        {
          _item: "google",
          link: "https://cloud.google.com/",
          target: "_blank",
          image: require("./stock/node.png"),
          alt: "Google Cloud Platform",
        },
        {
          _item: "digitalocean",
          link: "https://www.digitalocean.com/",
          target: "_blank",
          image: require("./stock/mongo.png"),
          alt: "Digital Ocean",
        },
      ],
		}
	},
	

	
	 footer: {
    nav: [
      {
        _item: "home",
        path: "/",
        name: "Inicio",
      },
      {
        _item: "pricing",
        path: "/pricing",
        name: "Contacto",
      },
      {
        _item: "about",
        path: "/about",
        name: "Ayuda",
      }
      
    ],
    left: `Produccion <i class="fas fa-heart"></i>  <a  target='_blank'>Administrador</a>`,
    right: `&copy 2020 <a  target='_blank'>proAdmin</a>`,
    //figure: require("./stock/proAdmin.png"),
    figureAlt: "Cloud",
  }
	


}
