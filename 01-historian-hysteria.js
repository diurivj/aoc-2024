const list1 = [
  18944, 94847, 93893, 37174, 77982, 31706, 67726, 71456, 40482, 14585, 57069,
  40699, 48676, 23514, 36128, 19869, 53224, 23070, 69524, 24599, 41935, 47751,
  22288, 48293, 18945, 77769, 65140, 11513, 89714, 52610, 27185, 83658, 91134,
  53850, 55054, 10212, 54102, 21657, 74862, 24811, 44850, 37491, 39163, 30157,
  72424, 43654, 49496, 35899, 82281, 97192, 46034, 88365, 78817, 75589, 97939,
  48643, 76050, 25408, 16067, 76415, 39296, 57548, 79498, 27852, 82634, 78249,
  56840, 12951, 13039, 22477, 88807, 42685, 93702, 49909, 40950, 17686, 98863,
  57293, 42078, 85441, 26599, 31809, 40119, 76115, 81044, 57936, 23584, 46888,
  15361, 63692, 52670, 60619, 13696, 89912, 72773, 83210, 81206, 77155, 47208,
  27327, 96293, 94802, 50909, 52198, 51653, 32519, 42094, 30025, 79623, 21295,
  86206, 28359, 87017, 24615, 29542, 62901, 99146, 93075, 12847, 11612, 51369,
  18870, 61738, 90693, 93786, 57197, 77071, 65104, 29984, 54425, 40618, 35774,
  78840, 80413, 39217, 93831, 32680, 59870, 36131, 71258, 46357, 46740, 96459,
  52806, 46820, 30526, 29428, 21148, 84200, 36356, 25777, 29472, 68046, 37179,
  53210, 68886, 38812, 70453, 35806, 76766, 41867, 80657, 60247, 75830, 47465,
  70411, 10471, 71528, 10691, 70085, 81136, 73681, 93864, 16042, 19117, 39492,
  25417, 85049, 30406, 13936, 55243, 64181, 98237, 23552, 41294, 67196, 64661,
  59452, 92837, 36014, 46410, 45131, 95566, 32847, 42927, 17116, 18876, 43451,
  30220, 26157, 26861, 76012, 64192, 28946, 63292, 23478, 45638, 62148, 15588,
  61594, 43461, 56158, 64821, 71462, 19014, 54415, 10780, 81105, 17184, 93701,
  63671, 42812, 40766, 99854, 89526, 59515, 83921, 37583, 94103, 58212, 18584,
  68062, 20139, 42424, 65341, 36194, 84111, 87601, 47336, 75923, 19615, 46509,
  12075, 66851, 95505, 81644, 57336, 12682, 52826, 62855, 92119, 32885, 75637,
  28707, 45032, 58498, 85626, 60072, 73172, 19185, 84031, 22488, 22074, 68023,
  91623, 33490, 88696, 48398, 60841, 75629, 63314, 31311, 23917, 27798, 48238,
  28428, 17958, 14206, 13904, 89364, 49166, 34424, 57587, 37012, 87711, 51942,
  67747, 90926, 42892, 81837, 97461, 84405, 96786, 87719, 99414, 16685, 92494,
  50709, 88473, 90391, 12159, 41424, 61248, 12277, 70185, 52564, 90462, 54612,
  36957, 99626, 74461, 52764, 39568, 59180, 79871, 80594, 38245, 16766, 97273,
  63895, 14683, 21429, 11489, 31788, 92919, 32081, 94955, 46573, 31615, 43751,
  64967, 43567, 92406, 31462, 94913, 49742, 37148, 73210, 34140, 98962, 59416,
  65077, 76448, 75645, 88343, 62221, 16215, 17452, 22985, 70440, 12100, 94845,
  35379, 23269, 46025, 88652, 38841, 50077, 65896, 87949, 44934, 30760, 41302,
  69787, 58816, 69377, 19377, 31559, 94937, 66329, 81585, 70384, 83758, 97318,
  54935, 44104, 37414, 39932, 21164, 20226, 15034, 57192, 64008, 73625, 61123,
  75907, 54845, 20037, 80669, 42188, 22974, 77086, 91679, 52264, 67647, 53545,
  66273, 17748, 84923, 22010, 74303, 99586, 63990, 18839, 15584, 95309, 39376,
  93614, 58781, 47844, 10765, 61349, 85686, 82542, 43208, 96568, 54906, 70032,
  47768, 58932, 12943, 56429, 96596, 11965, 99730, 86594, 42049, 19333, 10197,
  71145, 22777, 51275, 31605, 21126, 78695, 14591, 72862, 91673, 94405, 42737,
  66822, 11928, 97867, 20453, 29753, 28106, 33749, 69689, 87973, 39634, 29043,
  12534, 98827, 50279, 79552, 48382, 69488, 90802, 56253, 82457, 43272, 69955,
  35744, 90267, 77933, 88884, 94463, 73911, 13999, 65181, 20556, 64565, 38024,
  43790, 77458, 56630, 95681, 65381, 87770, 97854, 34976, 19094, 33712, 90408,
  93191, 91732, 65511, 29134, 76517, 10213, 34474, 91075, 46159, 91998, 13733,
  74667, 19170, 20715, 47230, 15999, 81634, 54188, 74813, 17109, 32457, 76430,
  29624, 85473, 40572, 29607, 30213, 47775, 86680, 46833, 48630, 54046, 23735,
  80324, 50040, 53711, 61254, 34102, 59675, 28571, 13257, 44802, 82857, 44862,
  96280, 35949, 34949, 51993, 32228, 82185, 53353, 13317, 57354, 24588, 61603,
  80008, 49943, 84307, 45773, 36986, 29364, 20558, 44114, 88385, 42932, 96098,
  96999, 90750, 64574, 18171, 50769, 93931, 89260, 14790, 67994, 12061, 47020,
  48991, 56852, 70634, 54495, 82926, 67073, 98886, 21988, 17454, 79488, 60506,
  73047, 66249, 31977, 63947, 54164, 29541, 63772, 67198, 24815, 71105, 67768,
  42104, 64630, 49050, 92251, 82298, 87431, 48735, 63297, 10242, 15536, 68342,
  26369, 96578, 80436, 68000, 79933, 63448, 15201, 96589, 20892, 51320, 89063,
  65447, 69822, 42234, 85711, 68441, 16247, 79340, 47625, 23346, 13216, 46823,
  34734, 31009, 30966, 29816, 44296, 91146, 87497, 32766, 51035, 71296, 75426,
  28710, 21499, 49897, 11047, 19301, 71952, 53953, 65252, 11297, 69216, 75593,
  64588, 33596, 87795, 75735, 18984, 70964, 25012, 64376, 79130, 70928, 28105,
  75311, 64681, 80149, 83384, 81964, 61988, 78530, 25077, 26746, 79841, 80091,
  74009, 22015, 43335, 67290, 26972, 52053, 71797, 29863, 58622, 39688, 98551,
  32935, 21503, 43145, 52037, 31154, 78771, 74726, 22627, 91490, 12378, 13791,
  92309, 97743, 46991, 43379, 68578, 20747, 57979, 80764, 59937, 38023, 36777,
  11134, 47553, 51697, 59588, 85954, 95116, 78383, 74457, 44750, 96943, 70595,
  38495, 99282, 19789, 14657, 30453, 93006, 15549, 33189, 93264, 16879, 46625,
  88328, 57696, 60422, 83887, 92370, 41866, 34293, 83169, 34596, 19560, 19908,
  63265, 19655, 16129, 17838, 70807, 62466, 57211, 60411, 21273, 59649, 73223,
  58619, 35738, 27293, 67969, 92182, 39381, 68568, 58113, 97245, 75766, 91865,
  12934, 76019, 48986, 73496, 93379, 88146, 47797, 33006, 42707, 23721, 86828,
  14394, 61565, 54593, 85724, 64482, 43344, 95699, 35083, 11406, 97112, 98420,
  39795, 57669, 78923, 63818, 17069, 71609, 11979, 91958, 63742, 34252, 68540,
  50641, 47078, 53520, 79753, 31556, 86806, 64837, 46299, 10178, 51271, 70164,
  75382, 96328, 14474, 73953, 41992, 20774, 38943, 50706, 32552, 69499, 82320,
  14284, 21129, 26033, 95841, 75943, 74166, 27422, 99070, 67909, 68155, 46712,
  89923, 52140, 44691, 22882, 27130, 87675, 89247, 65642, 62227, 79684, 58150,
  38963, 91347, 74372, 79880, 15344, 81435, 31720, 20893, 21428, 77219, 93168,
  46470, 13916, 44571, 78253, 53441, 56604, 83031, 73221, 70286, 23558, 62792,
  91565, 87897, 24942, 77979, 90706, 17540, 18849, 83764, 28524, 93176, 50231,
  84711, 72984, 71275, 52221, 30372, 30491, 93725, 46123, 92682, 16791, 57080,
  47889, 16588, 14075, 80217, 98665, 48993, 91736, 22932, 33131, 37822, 10510,
  76205, 17602, 21795, 70951, 50038, 52201, 28495, 15447, 59435, 98043, 22452,
  35291, 63005, 14067, 82541, 29993, 85783, 23967, 57653, 10791, 37026, 79495,
  97207, 24762, 24334, 27419, 79024, 86102, 46419, 34920, 58941, 17314, 17973,
  24639, 42333, 13105, 91291, 23180, 84749, 87013, 88076, 77537, 91923, 55594,
  76558, 92161, 39570, 56125, 86910, 65214, 69772, 31965, 10787, 77598, 56571,
  42570, 41380, 86959, 81566, 30393, 55306, 66852, 58522, 13778, 86536, 42608,
  20104, 63473, 62223, 87086, 87362, 16601, 88987, 45833, 54847, 41811, 86186,
  85959, 84368, 60047, 36271, 34552, 40260, 22485, 12864, 29790, 53753, 95354,
  75656, 63218, 72838, 83900, 50686, 73375, 44389, 37107, 42017, 40010, 24899,
  88484, 54749, 56650, 24261, 30705, 84721, 57738, 58394, 86517, 18834, 19773,
  62524, 71111, 16209, 87316, 15921, 83605, 51080, 16575, 31651, 66721,
];

const list2 = [
  47230, 63037, 35622, 43365, 51397, 96051, 11902, 76965, 93061, 31152, 76739,
  45538, 35141, 84329, 58619, 55004, 66466, 22452, 10212, 76499, 93701, 75200,
  79000, 64117, 83950, 10212, 58619, 69837, 28488, 69684, 48656, 15787, 84764,
  57354, 10212, 81939, 54749, 95309, 70479, 93701, 72214, 15131, 41356, 79478,
  44104, 68485, 85056, 85495, 21503, 58619, 41302, 22452, 42083, 15628, 36953,
  16469, 18546, 10212, 25012, 75766, 87007, 55243, 79292, 49166, 96695, 96938,
  93780, 28946, 49166, 10074, 10212, 85959, 83921, 29611, 16129, 99806, 29649,
  41383, 42809, 75766, 22452, 40317, 89377, 72872, 44280, 31570, 44970, 96589,
  55594, 74559, 31750, 18861, 27415, 47230, 84214, 16630, 82152, 25012, 96589,
  75766, 75766, 18939, 40761, 69276, 96252, 47906, 49166, 74276, 29594, 75766,
  58773, 12935, 93701, 51435, 91998, 80808, 48462, 83501, 71229, 67385, 87988,
  10212, 69411, 31667, 74967, 86660, 54749, 57354, 83935, 69634, 79059, 16648,
  16210, 56785, 25298, 50040, 55594, 50040, 67911, 97112, 91998, 54902, 90222,
  28324, 56708, 35626, 44549, 28946, 41021, 29549, 75766, 66900, 91615, 84320,
  97112, 70490, 50077, 22452, 71290, 76089, 33965, 49842, 21877, 16129, 22452,
  47230, 40477, 65211, 39320, 13626, 51123, 88207, 90161, 21503, 14263, 26125,
  93176, 64490, 28946, 40223, 10212, 75766, 22179, 30923, 48019, 55243, 29550,
  93701, 97112, 48646, 91998, 32289, 58325, 92161, 47621, 44104, 44104, 64810,
  55654, 47230, 45774, 28557, 79495, 12740, 61488, 61247, 59390, 25012, 79809,
  54593, 75119, 26910, 16129, 42138, 52709, 31726, 26628, 13443, 47230, 63170,
  23085, 70453, 21503, 41302, 47230, 92251, 75766, 93701, 23018, 75766, 54593,
  54088, 67251, 20275, 22452, 44104, 62555, 57354, 83921, 91998, 83340, 21503,
  82277, 96589, 93701, 32516, 17727, 90905, 68088, 40799, 83921, 93701, 70453,
  86404, 97112, 47961, 17279, 85959, 75766, 73497, 93176, 20544, 28656, 96589,
  31654, 29082, 22485, 91998, 92396, 57133, 28896, 91998, 19993, 99891, 15083,
  26662, 72086, 87315, 66292, 35379, 58278, 80519, 72976, 97112, 55243, 61233,
  12348, 25573, 75766, 50805, 76662, 25012, 47230, 97112, 11771, 57613, 44104,
  76415, 31588, 56730, 44104, 49166, 57226, 21503, 93176, 38541, 76530, 25944,
  78976, 40838, 48804, 59795, 13839, 34793, 95283, 97112, 79495, 47245, 52603,
  55243, 66083, 43338, 76415, 41198, 93701, 89099, 90022, 26879, 54593, 86933,
  84391, 22452, 42601, 44457, 51858, 69674, 82620, 28164, 49166, 49166, 34928,
  80693, 57315, 73007, 71889, 91998, 19777, 41302, 83948, 59065, 21677, 43833,
  72336, 16029, 92161, 54749, 10212, 12087, 41302, 43913, 87596, 50040, 73959,
  55243, 10212, 47230, 49904, 83921, 22452, 22485, 27836, 35736, 96589, 41302,
  22452, 55243, 96172, 83921, 75386, 22452, 92161, 97112, 57354, 22452, 15919,
  50077, 33251, 44104, 40465, 21503, 52138, 59531, 35709, 77686, 97112, 67863,
  54593, 20578, 24554, 76415, 85928, 77484, 54749, 94320, 57354, 79495, 55243,
  49141, 97102, 58619, 14103, 28946, 11125, 49166, 75766, 80715, 94639, 99196,
  44104, 11863, 44104, 85959, 83921, 57354, 96675, 75708, 92161, 25012, 18778,
  77443, 93701, 58028, 54304, 18400, 47230, 44661, 96589, 49166, 16129, 18769,
  72342, 37147, 41856, 10212, 22485, 93930, 73377, 28789, 37705, 77935, 93176,
  54749, 91998, 85959, 44104, 57012, 41302, 58619, 18828, 75766, 84374, 35561,
  44588, 50040, 69756, 97112, 50087, 76407, 26120, 91732, 83036, 64378, 87984,
  27992, 85959, 57551, 32462, 69595, 55243, 85959, 69043, 87279, 39331, 91998,
  67478, 37381, 58619, 10212, 19790, 58843, 23878, 21503, 20494, 51669, 83609,
  21503, 93701, 30508, 84073, 91214, 25591, 16688, 33434, 77375, 55243, 44104,
  73312, 18668, 22452, 55594, 93176, 50077, 66588, 85959, 57354, 24686, 30358,
  97523, 83004, 87200, 87730, 32331, 49166, 81539, 58619, 93176, 12949, 47077,
  24082, 93176, 40295, 92251, 20459, 27052, 35330, 47729, 54593, 82337, 47230,
  42380, 72523, 49166, 54293, 73229, 21503, 16129, 17585, 93701, 92398, 54749,
  91773, 90896, 78656, 25740, 24584, 81203, 21503, 94095, 93176, 53549, 93701,
  54749, 41302, 82333, 25012, 93176, 79495, 28946, 52120, 54313, 25164, 33312,
  10212, 58619, 55243, 93701, 13046, 50040, 58619, 56809, 28640, 49818, 23781,
  44663, 46771, 19826, 36395, 92161, 90814, 97112, 84056, 96191, 10212, 55243,
  80824, 69322, 82624, 92957, 15335, 10920, 33091, 54593, 10212, 75766, 55594,
  55243, 17782, 76245, 25012, 47803, 26624, 97112, 85959, 45152, 57163, 12437,
  97112, 44104, 62410, 11109, 62522, 93176, 43586, 76415, 10212, 55243, 55243,
  98182, 83921, 93701, 75602, 83921, 55644, 29216, 53928, 44892, 63943, 47230,
  33871, 27248, 22452, 23770, 82627, 50713, 40595, 68992, 92161, 83921, 46123,
  75766, 50077, 47230, 49779, 79495, 91817, 72933, 84903, 89143, 96589, 97112,
  58619, 89474, 53663, 93176, 93176, 54753, 48683, 70453, 87355, 22485, 61312,
  86934, 87030, 47014, 75766, 54749, 63537, 72016, 79449, 58619, 91998, 54593,
  81031, 10488, 21503, 21503, 37930, 47481, 49166, 54749, 80861, 73245, 55594,
  43268, 35055, 36843, 76415, 79495, 22452, 88263, 21503, 23198, 48662, 67297,
  41302, 85959, 31234, 16129, 93292, 34741, 22452, 41302, 76547, 40208, 50077,
  70606, 18759, 62378, 51563, 38878, 27454, 49166, 81581, 57686, 76071, 46014,
  43382, 58619, 22452, 27565, 93176, 77102, 76759, 44104, 17788, 97112, 20907,
  35350, 31884, 11323, 52518, 97420, 40446, 43023, 35379, 41469, 90083, 74124,
  36845, 38641, 54749, 25012, 21605, 48770, 59580, 29227, 97112, 66473, 18440,
  79994, 35379, 50880, 22452, 32957, 21503, 25992, 12351, 38997, 90114, 25012,
  49166, 97112, 76321, 10212, 41302, 17287, 10024, 58619, 26084, 66795, 14997,
  83481, 62283, 58619, 25578, 85959, 78396, 77295, 35061, 53643, 34592, 50040,
  74994, 84339, 18893, 52647, 22452, 46788, 97112, 47230, 49166, 45525, 41302,
  35506, 18163, 54749, 94117, 49792, 85487, 55594, 38411, 21503, 20217, 95309,
  45279, 93176, 44104, 93176, 54749, 66254, 51315, 18761, 41302, 19736, 42772,
  79221, 44220, 15945, 49166, 22021, 53735, 95309, 53573, 97112, 50254, 79652,
  22799, 54343, 10212, 75448, 69271, 59124, 57354, 85959, 85602, 71319, 93833,
  79844, 55243, 90862, 46204, 61262, 48178, 81415, 91998, 16518, 83921, 44104,
  47230, 52209, 47230, 11747, 41302, 58619, 52746, 29982, 75766, 25011, 50855,
  59729, 81297, 48108, 96589, 70670, 55243, 41302, 78151, 69055, 77210, 43894,
  93265, 35218, 62616, 55594, 93701, 16129, 73598, 42046, 70569, 75766, 54749,
  31377, 10212, 21992, 25012, 96165, 59975, 72432, 52100, 58619, 22111, 55594,
  49166, 88906, 72863, 93701, 75966, 17800, 54562, 11321, 49166, 61455, 70453,
  72312, 76831, 39302, 40186, 98335, 49166, 87375, 98205, 52198, 47230, 67158,
  87324, 69424, 35102, 58619, 60084, 47557, 75766, 25012, 54355, 83921, 93619,
  68150, 46042, 55243, 37677, 30036, 34684, 87858, 44104, 71928, 54593, 91638,
  41606, 85959, 67538, 10212, 51946, 55594, 25012, 44104, 55243, 10212, 50040,
  41302, 47230, 76415, 48161, 57354, 25012, 75766, 54749, 94926, 99080, 55243,
  92251, 70114, 66217, 86625, 47230, 20626, 40350, 41302, 52198, 79495, 16129,
  90297, 61453, 15943, 22452, 58404, 83818, 58760, 67066, 67505, 55594, 49166,
  18019, 54448, 96301, 22485, 39505, 21276, 32589, 21128, 49166, 94774,
];

let sorted1 = [...list1].sort((a, b) => a - b);
let sorted2 = [...list2].sort((a, b) => a - b);

let result = sorted1.reduce((acc, curr, idx) => {
  const n1 = curr;
  const n2 = sorted2[idx];
  const diff = Math.abs(n1 - n2);
  return acc + diff;
}, 0);

let result2 = sorted1.reduce((acc, curr) => {
  const n1 = curr;
  const coincidences = sorted2.filter((n) => n === n1);
  return acc + n1 * coincidences.length;
}, 0);

console.log(result2);
