var documenterSearchIndex = {"docs": [

{
    "location": "#",
    "page": "Home",
    "title": "Home",
    "category": "page",
    "text": ""
},

{
    "location": "#RMS-Reaction-Mechanism-Simulator-1",
    "page": "Home",
    "title": "RMS - Reaction Mechanism Simulator",
    "category": "section",
    "text": "RMS is a Julia package designed for simulating and analyzing large chemical reaction mechanisms.  "
},

{
    "location": "#Features-1",
    "page": "Home",
    "title": "Features",
    "category": "section",
    "text": "Ideal gas and dilute liquid phases.  \nConstant T and P and constant V adiabatic ideal gas reactors.  \nConstant T and V dilute liquid reactors.  \nDiffusion limited rates.\nSensitivity analysis for all reactors.  \nFlux diagrams with molecular images (if molecular information is provided).  \nHandy plotting and other solution analysis tools.  \nEasy to add new features.  "
},

{
    "location": "Input/#",
    "page": "Input",
    "title": "Input",
    "category": "page",
    "text": ""
},

{
    "location": "Input/#Input-1",
    "page": "Input",
    "title": "Input",
    "category": "section",
    "text": ""
},

{
    "location": "Input/#Accepted-file-formats-1",
    "page": "Input",
    "title": "Accepted file formats",
    "category": "section",
    "text": "RMS currently supports its own .rms YAML based file format and Chemkin (.inp) format files (if an RMG species_dictionary.txt file is available it can be taken along with the Chemkin file to provide molecular structure information for the Chemkin file   species).  Chemkin files can be in any units and individual units (quantities specified in Unitful format:  1.0u\"m^3\") are accepted with the RMS format files.  These can be loadedphaseDict = readinput(\"../src/testing/mech.rms\")orphaseDict = readinput(\"chem_annotated.inp\";\n              spcdict=\"species_dictionary.txt\")respectively.  Note that spcdict is an optional parameter.  "
},

{
    "location": "Input/#Output-of-Input-File-Reading-1",
    "page": "Input",
    "title": "Output of Input File Reading",
    "category": "section",
    "text": "The output of reading an input file in RMS returns a dictionary of phase dictionaries indexed by the name of each phase. Each phase dictionary has an array of Species objects corresponding to the key \"Species\" and an array of Reaction Objects corresponding to the key \"Reactions\"."
},

{
    "location": "Input/#YAML-File-Formats-1",
    "page": "Input",
    "title": "YAML File Formats",
    "category": "section",
    "text": "RMS uses a YAML format input file.  YAML essentially stores information in embedded dictionaries and lists. An example segment from a .rms file is given below.  Phases:\n- Species:\n  - name: Ar\n    smiles: \'[Ar]\'\n    thermo:\n      polys:\n      - Tmax: 3459.6\n        Tmin: 100.0\n        coefs: [2.5, 9.24384602e-15, -1.36779837e-17, 6.66184769e-21, -1.00106912e-24,\n          -1552.16105, 2.16745116]\n        type: NASApolynomial\n      - Tmax: 5000.0\n        Tmin: 3459.6\n        coefs: [2.49999999, 9.20455546e-12, -3.58608293e-15, 6.15198922e-19, -3.92041801e-23,\n          -1552.16104, 2.16745122]\n        type: NASApolynomial\n      type: NASA\n    type: Species\n  - name: He\n    smiles: \'[He]\'\n    thermo:\n      polys:\n      - Tmax: 3459.6\n        Tmin: 100.0\n        coefs: [2.5, 9.24384602e-15, -1.36779837e-17, 6.66184769e-21, -1.00106912e-24,\n          -1552.16105, -1.28349484]\n        type: NASApolynomial\n      - Tmax: 5000.0\n        Tmin: 3459.6\n        coefs: [2.49999999, 9.20455546e-12, -3.58608293e-15, 6.15198922e-19, -3.92041801e-23,\n          -1552.16104, -1.28349478]\n        type: NASApolynomial\n      type: NASA\n  name: phase\n  Reactions:\n  - kinetics: {A: 2.7590590000000007e-08, Ea: 26459.615999999998, n: 3.802, type: Arrhenius}\n    products: [oxygen, octane]\n    reactants: [\'C[CH]CCCCCC\', \'[O]O\']\n    type: ElementaryReaction\n  - kinetics: {A: 2.7590590000000007e-08, Ea: 26459.615999999998, n: 3.802, type: Arrhenius}\n    products: [oxygen, octane]\n    reactants: [\'CCC[CH]CCCC\', \'[O]O\']\n    type: ElementaryReactionDashes - denote the beginning of a new key:value pair.  If done in series as above under Species: and under Reactions: this makes an array of dictionaries.  Colons : denote the beginning of a key:value pair within a dictionary.  Key, value pairs following a dash that do not have a dash themselves are part of the same dictionary.  You can also define dictionaries and lists as normal within Julia within the YAML.  "
},

{
    "location": "Input/#.rms-File-Format-1",
    "page": "Input",
    "title": ".rms File Format",
    "category": "section",
    "text": "In YAML RMS amounts to a dictionary of phase dictionaries.  Each phase dictionary has an entry corresponding to \"Species\", \"Reactions\" and \"name\".  The \"name\" corresponds to the name of the phase.  Within \"Species\" and \"Reactions\" are associated lists of dictionaries that correspond to Species and Reaction objects.  Beneath \"Species\" and \"Reactions\" the structures all follow the same conventions.  Each dictionary is assumed to correspond to an object within RMS that should be denoted by the type key and to have key:value maps that correspond to all necessary parameters to construct the object corresponding to the type value.  Thus, the an Arrhenius rate calculator can be defined as {A: 2.7590590000000007e-08, Ea: 26459.615999999998, n: 3.802, type: Arrhenius}.  In that case RMS knows the object from the type value and what to put in the Arrhenius object from the remaining fields.  Of course for more complex objects some of the values will correspond to objects themselves and thus be dictionaries with their own type values.  Units can be defined for specific numerical values in the Unitful format 1.0u\"m^3.  However, currently molecular units are not supported and thus moles must be used (this restriction applies only to .rms files and not to Chemkin format files).  "
},

{
    "location": "Simulating/#",
    "page": "Simulations",
    "title": "Simulations",
    "category": "page",
    "text": ""
},

{
    "location": "Simulating/#Simulations-1",
    "page": "Simulations",
    "title": "Simulations",
    "category": "section",
    "text": ""
},

{
    "location": "Simulating/#Defining-a-Phase-1",
    "page": "Simulations",
    "title": "Defining a Phase",
    "category": "section",
    "text": "A phase in RMS defines how thermodynamic and kinetic parameters for individual species and reactions are calculated.  For the IdealGas case defining a phase is quite simple:  ig = IdealGas(spcs,rxns,name=\"gas\")where spcs and rxns and lists of AbstractSpecies and AbstractReaction objects respectively.   For an IdealDiluteSolution it is slightly more complicated because some of these properties (currently  primarily diffusion limitations) can be dependent on the solvent:  solv = Solvent(\"octane\",RiedelViscosity(-98.805,3905.5,14.103,-2.5112e-5,2.0))\nliq = IdealDiluteSolution(spcs,rxns,solv;name=\"phase\",diffusionlimited=true)"
},

{
    "location": "Simulating/#Defining-Initial-Conditions-1",
    "page": "Simulations",
    "title": "Defining Initial Conditions",
    "category": "section",
    "text": "Initial conditions for the simulation are defined within a dictionary in SI units.  The keys \"T\",\"P\" and \"V\" correspond to thermodynamic values (\"V\" being the extensive volume) while species names correspond to numbers of moles (extensive).  For example, since the initial V can be calculated implicitly a valid IdealGas initial condition might be:  Dict([\"T\"=>1000.0,\"P\"=>1e5,\"H2\"=>0.67,\"O2\"=>0.33])In the case of an IdealDiluteSolution where pressure is assumed to not affect the thermodynamic state it might look more like:  Dict([\"T\"=>450.0,\"V\"=>1.0e-6,\"octane\"=>6.154e-3,\"oxygen\"=>4.953e-6])"
},

{
    "location": "Simulating/#Defining-a-Domain-1",
    "page": "Simulations",
    "title": "Defining a Domain",
    "category": "section",
    "text": "A domain in RMS is a homogeneous volume that contains a single phase.  The AbstractDomain object defines how the thermodynamics of the volume evolve with respect to time.  For example in a ConstantTPDomain the temperature and pressure are defined in the domain object and held constant over the simulation and the volume is integrated for while in a ConstantVDomain (a constant V adiabatic reactor) the volume is kept constant and the temperature is integrated for.When constructing a Domain object constant concentration species can be defined (list of species names).   During integration the derivatives with respect to time of these species will be kept at zero.  Sensitivity analysis can also be requested on the Domain object.  IdealDiluteSolution example:  domain,y0 = ConstantTVDomain(phase=liq,initialconds=initialconds,constantspecies=[\"oxygen\"])IdealGas example:  domain,y0 = ConstantTPDomain(phase=ig,initialconds=initialconds;sensitivity=true)"
},

{
    "location": "Simulating/#Defining-a-Reactor-object-1",
    "page": "Simulations",
    "title": "Defining a Reactor object",
    "category": "section",
    "text": "The Reactor object exists primarily to automatically sets up the ODEProblem object for you to solve.   It takes the domain, the initial condition vector returned when constructing the domain and a time interval.  Example:  react = Reactor(domain,y0,(0.0,150.1))"
},

{
    "location": "Simulating/#Solving-a-Reactor-object-1",
    "page": "Simulations",
    "title": "Solving a Reactor object",
    "category": "section",
    "text": "RMS purposefully exposes the solver interface provide users with all the options available from Julia\'s DifferentialEquations package.  The ODEProblem object is a field of the Reactor object react.ode and can be solved as the user desires.  Example:  sol = solve(react.ode,CVODE_BDF(),abstol=1e-20,reltol=1e-12)In general CVODE_BDF tends to work well on these problems.  "
},

{
    "location": "Analysis/#",
    "page": "Analysis",
    "title": "Analysis",
    "category": "page",
    "text": ""
},

{
    "location": "Analysis/#Analysis-1",
    "page": "Analysis",
    "title": "Analysis",
    "category": "section",
    "text": ""
},

{
    "location": "Analysis/#The-Simulation-Object-1",
    "page": "Analysis",
    "title": "The Simulation Object",
    "category": "section",
    "text": "Since the solver interface is exposed the solution object generated only gives the raw moles and raw sensitivity values, which typically are not what a user wants.  The Simulation object combines the solution information and the domain information to calculate much more useful properties of the solution.  The Simulation object can be defined:  bsol = Simulation(sol,domain)where sol is the ODESolution object output by the DifferentialEquations package and domain is the domain sol corresponds to.  "
},

{
    "location": "Analysis/#Useful-Properties-1",
    "page": "Analysis",
    "title": "Useful Properties",
    "category": "section",
    "text": ""
},

{
    "location": "Analysis/#Thermodynamic-Properties-1",
    "page": "Analysis",
    "title": "Thermodynamic Properties",
    "category": "section",
    "text": "Any thermodynamic property (T,P,V,C) at any given time t can be calculated in the formatgetT(bsol,t)where T can be replaced by any of the other properties.  "
},

{
    "location": "Analysis/#Mole-Fractions-1",
    "page": "Analysis",
    "title": "Mole Fractions",
    "category": "section",
    "text": "Mole fraction information can be retrieved using the molefraction function.   molefraction(bsol) will give the mole fractions of all species at the times bsol.sol.t.   molefraction(bsol,t) will the mole fractions of all species at time t.   molefraction(bsol,name,t) will give the mole fraction of the species with name name at time t.  "
},

{
    "location": "Analysis/#ROPs-1",
    "page": "Analysis",
    "title": "ROPs",
    "category": "section",
    "text": "Rates of production/consumption (associated with each reaction and each species at a given time) can be retrived using the rops function.   rops(bsol,t) will the matrix of rops for all species and all reactions at time t.   rops(bsol,name,t) will give the array of rops for the species with name name at time t.  "
},

{
    "location": "Analysis/#Concentration-Sensitivities-1",
    "page": "Analysis",
    "title": "Concentration Sensitivities",
    "category": "section",
    "text": "Concentration sensitivities to rate coefficients and species gibbs free energies can be retrieved using the getconcentrationsensitivity(bsol,numerator,denominator,t) function.   Here bsol denotes the Simulation object, and t denotes the time.  The output is the sensitivity of the numerator to the denominator.  For species concentration and species thermo this is the name of the species for reactions this is the index of the reaction.  "
},

{
    "location": "Analysis/#Rates-1",
    "page": "Analysis",
    "title": "Rates",
    "category": "section",
    "text": "The function rates can be used to calculate the rates of all reactions at specific time points.   rates(bsol,t) will give the array of reaction rates at time t while rates(bsol;ts) will give a matrix of reaction rates at all times in ts.   Note that ts defaults to bsol.sol.t.  "
},

{
    "location": "Analysis/#Other-Useful-Properties-1",
    "page": "Analysis",
    "title": "Other Useful Properties",
    "category": "section",
    "text": "Please let us know on our Github issues page if we\'re missing any important property calculators.  "
},

{
    "location": "Analysis/#Plotting-1",
    "page": "Analysis",
    "title": "Plotting",
    "category": "section",
    "text": ""
},

{
    "location": "Analysis/#Plotting-Mole-Fractions-1",
    "page": "Analysis",
    "title": "Plotting Mole Fractions",
    "category": "section",
    "text": "Mole fractions can be plotting using the plotmolefractions function plotmolefractions(bsol, tf; t0=1e-15,N=1000,tol=0.01) plots all species with molefraction greater than tol at N logarithmically spaced time points between t0 and tf.   plotmolefractions(bsol; tol=0.01) plots all species with molefraction greater than tol at the points in bsol.sol.t.   plotmolefractions(bsol,spcnames) plots all the species with names in spcnames at the points in bsol.sol.t.  "
},

{
    "location": "Analysis/#Plotting-Concentration-Sensitivity-1",
    "page": "Analysis",
    "title": "Plotting Concentration Sensitivity",
    "category": "section",
    "text": "Concentration sensitivities can be plotted using the plotmaxthermosensitivity and plotmaxratesensitivity functions.   Both of these follow the same format:   plotmaxthermosensitivity(bsol, spcname; N=0, tol= 1e-2) spcname corresponds to the species sensitivities are being calculated for, N is the maximum number of sensitive species/reactions plotted (0 corresponds to all of them), sensitive species/reactions with sensitivities less than tol are not included in the plot.  Note that the thermo sensitivities are given in mol/kcal while the rate sensitivities are fully non-dimensionalized (as displayed on the plots).  "
},

{
    "location": "Analysis/#Plotting-ROPs-1",
    "page": "Analysis",
    "title": "Plotting ROPs",
    "category": "section",
    "text": "ROPs can be plotted with the plotrops function.   plotrops(bsol,name,t;N=0,tol=0.01) will plot the ROPs for species with name name at time t including at most N reactions and not including reactions with absolute rates less than tol * the largest absolute rate.  This is a bar plot comparing the reactions that contribute the most to the production and loss of the speciesThe rops can be plotted with respect to time on a line plot using plotrops(bsol,name;rxnrates=Array{Float64,1}(),ts=Array{Float64,1}(),tol=0.05) in this case rxnrates corresponds to the matrix of reaction rates at each time point (can be expensive to compute so if available can be reused), ts correpsonds to a set of time points to plot at (otherwise defaults to bsol.sol.t), any reaction with flux smaller than tol * the largest absolute rate at every time point is excluded from the plot.  "
},

{
    "location": "Analysis/#Other-Plots-1",
    "page": "Analysis",
    "title": "Other Plots",
    "category": "section",
    "text": "While we are trying to build up a library of plotting functions that make mechanism analysis easier we may not have the one you need.  However, the tools in the Useful Properties section should be enough most of the time. We\'re happy to provide guidance on our Github issues page and add plotting functions you find useful.  "
},

{
    "location": "Analysis/#Flux-Diagrams-1",
    "page": "Analysis",
    "title": "Flux Diagrams",
    "category": "section",
    "text": "RMS generates flux diagrams with molecular images (or names when images aren\'t available) using the getfluxdiagram function:  getfluxdiagram(bsol,t;centralspecieslist=Array{String,1}(),superimpose=false,\n    maximumnodecount=50, maximumedgecount=50, concentrationtol=1e-6, speciesratetolerance=1e-6,\n    maximumnodepenwidth=10.0,maximumedgepenwidth=10.0,radius=1,centralreactioncount=-1,outputdirectory=\"fluxdiagrams\")This generates a flux diagram at the time point t.  centralspecieslist denotes a list of species that must be included in the diagram, maximumnodecount denotes the maximum number of species in the diagram, maximumedgecount denotes the maximum number of connections between species, concentrationtol denotes the lowest fractional concentration to show in the diagram, speciesratetolerance denotes the lowest fraction species rate to show in the diagram, maximumNodePenWidth denotes the thickness of the border around a node a maximum concentration.  maximumedgepenwidth denotes the thickness of the edge at maximum species rate, radius is the graph radius plotted around a central species.  "
},

{
    "location": "Analysis/#Other-Useful-Functionality-1",
    "page": "Analysis",
    "title": "Other Useful Functionality",
    "category": "section",
    "text": "spcindex(bsol,name) will give you the index of the species with name name.  "
},

]}
