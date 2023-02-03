import axios from "axios";

// Variables
export const submitUrl = "https://vbs.videobrowsing.org/api/v1/submit";
export const defaultDetail = 0.08;
export const searchUri = process.env.REACT_APP_BACK_END_URL + "/api/lsc/search";
export const stateUri =
  process.env.REACT_APP_BACK_END_URL + "/api/lsc/session";
export const backEndSubmitUri =
  process.env.REACT_APP_BACK_END_URL + "/api/lsc/submit";
export const maxCol = 12;
export const minCol = 1;
// export const exampleImage = "images/noImage.jpg";
export const exampleUrl =
  "http://selab.nhtlongcs.com:20570/200001/01/20000101_000113_000.webp";
export const minQuantity = 0;
export const maxQuantity = 60;
export const imageUrl = "/data/";
export const imageRoot = process.env.REACT_APP_MEDIA_SERVER_URL;

export const keywords = [
  "tour",
  "toppings",
  "underpants",
  "pizza",
  "vehicle",
  "drinking",
  "attached",
  "aquatic bird",
  "microwave",
  "indoor",
  "standing",
  "cabinet",
  "scissors",
  "auto racing",
  "keyboard",
  "blender",
  "seated",
  "hydrozoan",
  "background pattern",
  "stop",
  "car seat",
  "clouds",
  "bed",
  "screen",
  "gear",
  "railing",
  "alcohol",
  "jellyfish",
  "bassoon",
  "machine",
  "dark",
  "paving",
  "chair",
  "person",
  "kitchen appliance",
  "horse",
  "see",
  "double",
  "worktable",
  "harbor",
  "lush",
  "line",
  "console table",
  "hospital room",
  "apple",
  "entertainment center",
  "bowling",
  "shop",
  "academic costume",
  "oak",
  "library",
  "potato",
  "posing",
  "broom",
  "wall",
  "pew",
  "baby",
  "silver",
  "pier",
  "store",
  "outdoor object",
  "graffiti",
  "bar",
  "crayon",
  "car mirror",
  "pillow",
  "pencil",
  "comet",
  "piece",
  "end",
  "decorated",
  "arranged",
  "bass fiddle",
  "fries",
  "life jacket",
  "clavier",
  "toilet",
  "hillside",
  "milk",
  "hill",
  "dirt",
  "friends",
  "megaphone",
  "soil",
  "refrigerator",
  "candelabrum",
  "pointing",
  "chocolate",
  "throwing",
  "moving",
  "fondue",
  "gift wrapping",
  "close",
  "crowded",
  "traffic light",
  "rug",
  "pylon",
  "telephone booth",
  "lap",
  "rainy",
  "doughnut",
  "bathroom",
  "snow",
  "gearshift",
  "hood",
  "baggage claim",
  "turn",
  "flock",
  "application",
  "marketplace",
  "bread",
  "street",
  "man",
  "hard",
  "stuffed",
  "donut",
  "furniture",
  "blue",
  "satellite",
  "watch",
  "lobster",
  "blanket",
  "phone",
  "basketball",
  "restroom",
  "lawn mower",
  "toothbrush",
  "buffet",
  "signal",
  "porcelain",
  "flat",
  "woman",
  "round",
  "connector",
  "remote",
  "water basin",
  "bite",
  "past",
  "place of worship",
  "passing",
  "blacktop",
  "tree",
  "fabric",
  "cooker",
  "necktie",
  "jambalaya",
  "cut",
  "camera",
  "writing implement",
  "rack",
  "dish",
  "kitchenware",
  "items",
  "candle",
  "girl",
  "city",
  "golf",
  "smoothie",
  "umbrella",
  "goggles",
  "playing",
  "soup",
  "beach",
  "ravine",
  "electronic",
  "arthropod",
  "boxing",
  "bushes",
  "pastry",
  "pen",
  "headdress",
  "mounted",
  "rocky",
  "green",
  "shade",
  "pulling",
  "platform",
  "lake",
  "balcony",
  "step",
  "rice",
  "deck",
  "mammal",
  "pool table",
  "old",
  "desk",
  "containing",
  "seat",
  "grill",
  "belt",
  "dinner",
  "LEGO",
  "wearing",
  "half",
  "computer",
  "town",
  "waterside",
  "fighter",
  "runway",
  "dessert",
  "hotel",
  "clock",
  "broccoli",
  "rail",
  "cloth",
  "wine",
  "scene",
  "grassy",
  "x-ray film",
  "track",
  "spectacles",
  "scrambled eggs",
  "riverbed",
  "castle",
  "decker",
  "transit",
  "range hood",
  "ledge",
  "corn",
  "megalith",
  "tableware",
  "row",
  "loudspeaker",
  "trash",
  "slope",
  "coil spring",
  "looking",
  "doll",
  "messy",
  "cooking",
  "dryer",
  "whiteboard",
  "sitting",
  "someone",
  "jet",
  "red",
  "pole",
  "control panel",
  "slice",
  "bedclothes",
  "aquarium",
  "holding",
  "dirty",
  "coffee table",
  "food court",
  "pool ball",
  "trailer",
  "dune",
  "potter's wheel",
  "fried rice",
  "cable",
  "fireplace",
  "playground",
  "set",
  "camera lens",
  "coming",
  "toddler",
  "dining table",
  "bus",
  "watching",
  "power saw",
  "bumper car",
  "people",
  "outdoor",
  "frog",
  "hair",
  "ramp",
  "sale",
  "piano",
  "sport",
  "cosmetic",
  "cellphone",
  "can",
  "greenhouse",
  "dressed",
  "lying",
  "picture frame",
  "sleeping",
  "drink",
  "gun",
  "food processor",
  "cement",
  "living",
  "traffic",
  "reef",
  "different",
  "lunch",
  "motorcycle",
  "desktop",
  "way",
  "residential",
  "skating",
  "fork",
  "bunch",
  "crane",
  "opened",
  "river",
  "pool",
  "blur",
  "nan",
  "curb",
  "coffee cup",
  "lumber",
  "sprinkler system",
  "fish",
  "receipt",
  "pink",
  "house",
  "plunger",
  "aircraft",
  "busy",
  "poplar",
  "airship",
  "park",
  "shower",
  "roadway",
  "rocket",
  "tea",
  "baby bed",
  "abstract",
  "television",
  "sailing vessel",
  "shoes",
  "towel",
  "match",
  "pedestrians",
  "wet",
  "dolphin",
  "silhouette",
  "water sport",
  "walking",
  "document",
  "curtain",
  "animal",
  "snack food",
  "microscope",
  "skateboarding",
  "brown",
  "ocean floor",
  "waterfall",
  "wrestling",
  "sky",
  "lined",
  "handwear",
  "cabbage",
  "doing",
  "canyon",
  "cloudy",
  "tray",
  "area",
  "sand",
  "van",
  "stack",
  "floor",
  "pile",
  "watercraft",
  "square",
  "glasses",
  "field",
  "teacup",
  "empty",
  "dome",
  "electronics",
  "rink",
  "plaque",
  "necklet",
  "gate",
  "mug",
  "willow",
  "kite",
  "vegetable",
  "crowd",
  "controller",
  "microphone",
  "hotdog",
  "gambling house",
  "scooter",
  "timeline",
  "pan",
  "birthday",
  "swing",
  "mask",
  "griddle",
  "porch",
  "bottle",
  "flag",
  "stopped",
  "bin",
  "jack",
  "pickle",
  "drinking water",
  "hula hoop",
  "wet suit",
  "closet",
  "strainer",
  "conifer",
  "truck",
  "beer",
  "water tower",
  "fireworks",
  "coffee",
  "coat",
  "family",
  "sunglasses",
  "clock radio",
  "air",
  "hall",
  "reading",
  "arch",
  "petting",
  "tower",
  "airplane",
  "carousel",
  "paper",
  "displayed",
  "water",
  "ocean",
  "food",
  "fruit",
  "sea",
  "something",
  "stationary",
  "rainbow",
  "dock",
  "colorful",
  "drum",
  "graphical user interface",
  "aisle",
  "door",
  "road",
  "hole",
  "smiling",
  "tied",
  "shrimp",
  "chat or text message",
  "cooked",
  "cello",
  "lots",
  "farm building",
  "military vehicle",
  "power shovel",
  "beverage",
  "assortment",
  "typewriter",
  "leaf",
  "banquet",
  "sofa",
  "cabin",
  "plain",
  "meat",
  "case",
  "crosswalk",
  "pond",
  "reflection",
  "Teams",
  "sun",
  "climbing frame",
  "shore",
  "bathtub",
  "lit",
  "shark",
  "overlooking",
  "game",
  "automaton",
  "telescope",
  "young",
  "engineering drawing",
  "work-clothing",
  "handcart",
  "bicycle",
  "striped",
  "calla lily",
  "missile",
  "basement",
  "image",
  "display",
  "night",
  "narrow",
  "suit",
  "walkway",
  "plaza",
  "hat",
  "railroad",
  "bright",
  "bookshelf",
  "enclosure",
  "bell jar",
  "bubble",
  "lamp",
  "construction",
  "pea",
  "meal",
  "weapon",
  "ride",
  "monitor",
  "wave",
  "cat",
  "dining",
  "stage",
  "printer",
  "trampoline",
  "skirt",
  "docked",
  "glider",
  "monkey",
  "thread",
  "church",
  "equipment",
  "structure",
  "egg",
  "spring",
  "metal",
  "primate",
  "logo",
  "jacket",
  "neck",
  "carrying",
  "meter",
  "stew",
  "surrounded",
  "vending machine",
  "fountain",
  "aquatic mammal",
  "reptile",
  "laser",
  "teddy",
  "grass",
  "cluttered",
  "lettuce",
  "head",
  "cup",
  "plant",
  "insect",
  "toy",
  "tub",
  "stable",
  "jumping",
  "needle",
  "wood",
  "lawn",
  "conference room",
  "vacuum",
  "dog",
  "cake",
  "tiled",
  "sign",
  "letter",
  "high",
  "blackboard",
  "text",
  "bridge",
  "towpath",
  "building",
  "filled",
  "booth",
  "herd",
  "exercise device",
  "land",
  "open",
  "ceiling",
  "power drill",
  "suitcase",
  "gas pump",
  "produce",
  "slot machine",
  "wardrobe",
  "black",
  "farm machine",
  "path",
  "gauge",
  "balloon",
  "parking meter",
  "qr code",
  "calendar",
  "rider",
  "plate",
  "telephone",
  "bovine",
  "plastic",
  "living room",
  "barbecue",
  "domestic cat",
  "coffee maker",
  "leather",
  "painted",
  "baby buggy",
  "variety",
  "fresh",
  "brass",
  "making",
  "raft",
  "time",
  "fan",
  "elevator",
  "envelope",
  "clothing",
  "clean",
  "transport",
  "basket",
  "shelf",
  "restaurant",
  "stadium",
  "baked",
  "promontory",
  "yellow",
  "bun",
  "bow",
  "lighter",
  "colonnade",
  "screenshot",
  "container",
  "net",
  "guitar",
  "archery",
  "agave",
  "ship",
  "Eggs Benedict",
  "tepee",
  "diagram",
  "feet",
  "measuring stick",
  "hammer",
  "purple",
  "sunny",
  "hydrant",
  "table",
  "warehouse",
  "dining room",
  "christmas",
  "driving",
  "appliance",
  "hand",
  "government building",
  "cutting",
  "laying",
  "brick",
  "bag",
  "light",
  "fence",
  "propeller",
  "window blind",
  "cave",
  "trunk",
  "concert band",
  "barbell",
  "bass",
  "tile",
  "white",
  "lagomorph",
  "rodent",
  "lock",
  "bedroom",
  "web",
  "fishing",
  "sandwich",
  "tan",
  "building material",
  "flower",
  "skin cream",
  "sweater",
  "oven",
  "jungle gym",
  "trick",
  "staring",
  "using",
  "wire",
  "ear",
  "pot",
  "paper cup",
  "closeup",
  "stereo",
  "shoji",
  "curry",
  "swimsuit",
  "highland",
  "highway",
  "skateboard",
  "preparing",
  "palm",
  "several",
  "organ",
  "engine",
  "rain",
  "soft-finned fish",
  "sandy",
  "accordion",
  "surge suppressor",
  "cherry",
  "teeth",
  "traveling",
  "tripod",
  "apartment",
  "orange",
  "forest",
  "window",
  "star",
  "grater",
  "fire",
  "harp",
  "stainless",
  "waiting",
  "washer",
  "file",
  "public",
  "sushi",
  "stone",
  "arm",
  "branch",
  "subway",
  "device",
  "skiing",
  "female",
  "object",
  "map",
  "fruit drink",
  "roof",
  "scaffolding",
  "court",
  "corner",
  "tool",
  "eating",
  "eaten",
  "stall",
  "metalware",
  "bird",
  "thing",
  "sink",
  "sunset",
  "bouquet",
  "athletic game",
  "airport",
  "painting",
  "mosquito net",
  "picnic",
  "lotion",
  "boy",
  "riding",
  "hot",
  "bird of prey",
  "poolroom",
  "cabaret",
  "electric organ",
  "piece de resistance",
  "player",
  "smoke",
  "various",
  "tennis",
  "bicycle rack",
  "underwear",
  "clear",
  "counter",
  "prepared",
  "Ferris wheel",
  "room",
  "day",
  "shirt",
  "trouser",
  "clothes dryer",
  "blurry",
  "wrapped",
  "book",
  "lady",
  "bowed instrument",
  "intersection",
  "apartment building",
  "brush",
  "train",
  "scarf",
  "military uniform",
  "control",
  "opener",
  "vessel",
  "gallery",
  "boat",
  "banner",
  "nature",
  "steel",
  "rolling pin",
  "windmill",
  "breakfast",
  "column",
  "plane",
  "full",
  "stove",
  "crab",
  "bastion",
  "cash machine",
  "bus stop",
  "car",
  "office",
  "police",
  "melon",
  "hairpiece",
  "luggage",
  "wheel",
  "setting",
  "iPod",
  "clothes",
  "child",
  "pasta",
  "brushing",
  "pasture",
  "gymnastics",
  "cage",
  "night sky",
  "elephant",
  "garden",
  "trail",
  "enjoying",
  "mountain",
  "swimming",
  "station",
  "box",
  "minibar",
  "parked",
  "bench",
  "railroad tunnel",
  "tarmac",
  "footwear",
  "ground",
  "wooden",
  "dishwasher",
  "soft drink",
  "stair",
  "parrot",
  "golf cart",
  "tall",
  "pipe",
  "window seat",
  "businesscard",
  "dress",
  "helmet",
  "male",
  "cart",
  "stacked",
  "post",
  "beech",
  "doorway",
  "gray",
  "cockpit",
  "sliced",
  "invertebrate",
  "remote control",
  "glass",
  "little",
  "rock",
  "ray",
  "mouse",
  "dishware",
  "bowl",
  "squirrel",
  "Word",
  "barn",
  "projector",
  "frittata",
  "business",
  "chest of drawers",
  "head covering",
  "tent",
  "auditorium",
  "camper",
  "music",
  "luggage compartment",
  "working",
  "bear",
  "antenna",
  "altar",
  "sewing machine",
  "wooded",
  "shape",
  "laptop",
  "concrete",
  "bath",
  "accessory",
  "parking",
  "newspaper",
  "grey",
  "resort",
  "knife",
  "stupa",
  "group",
  "island",
  "skyscraper",
  "putting",
  "power line",
  "spider",
  "sidewalk",
  "distance",
  "white goods",
  "kitchen",
  "mirror",
  "website",
];

// const sessionId = "sessionIdFake"

// Function

export const formatImageName = (name) => {
  const splitItems = name.split("_");
  const item = splitItems[0].substr(4, 5);
  const shot = splitItems[1];
  return `${item}_${shot}`;
};

export async function submitImage(
  sendItems: any,
  sessionId: any,
  stateId: any
) {
  sendItems.forEach(async (selectItem: any) => {
    const splitItems = selectItem.name.split("_");
    const item = splitItems[0].substr(4, 5);
    const shot = splitItems[1];
    console.log("item", item);
    console.log("shot", shot);
    console.log("sessionId", sessionId);
    console.log("state_id", stateId);
    const res = await axios.get(submitUrl, {
      params: {
        item: item,
        shot: shot,
        session: sessionId,
      },
    });

    const res2 = await axios.post(backEndSubmitUri, {
      item: item,
      shot: shot,
      session: sessionId,
      state_id: stateId,
    });

    console.log("be response", res2);
    // console.log("response", res);
  });
}

export function getAvailableData(
  items: any[],
  clickPage: number,
  itemsPerPage: number
) {
  const index = clickPage * itemsPerPage - itemsPerPage;
  const endIndex = index + itemsPerPage;
  const pageItems = items.slice(index, endIndex);
  return pageItems;
}

export function sliceNeedData(items: any[], index: number, endIndex: number) {
  const itemUrls = items.slice(index, endIndex);
  return itemUrls;
}

// extension should include the dot, for example '.html'
function changeExtension(file: string, extension: string) {
  return file = file.substr(0, file.lastIndexOf(".")) + extension;
}

export const urlGenerator = async (
  listBatchDirHandler: any,
  showImageName: any
) => {
  // if (!listBatchDirHandler) return;
  const imageUrls = await Promise.all(
    showImageName.map(async (val: any) => urlDetailGenerator(listBatchDirHandler, val))
  );
  return imageUrls;
};

export const urlDetailGenerator = async (
  listBatchDirHandler: any,
  showImageName: any
) => {
  // if (!listBatchDirHandler) return;

  if (showImageName.startsWith("http")) {
    console.log("Visualizing")
    console.log(showImageName)
    return {
      path: showImageName,
      name: showImageName.split("/").pop()
    }
  }
  showImageName = changeExtension(showImageName, ".webp");
  const yearMonth = showImageName.substr(0, 6);
  const day = showImageName.substr(6, 2);
  return {
    path: imageRoot + "/" + yearMonth + "/" + day + "/" + showImageName,
    name: showImageName,
  };
  // showImageName = changeExtension(showImageName, ".jpg")
  // try {
  //   const monthHandle = await listBatchDirHandler[
  //     yearMonth
  //   ].getDirectoryHandle(day);
  //   const fileHandle = await monthHandle.getFileHandle(showImageName);
  //   const file = await fileHandle.getFile();
  //   return {
  //     path: URL.createObjectURL(file),
  //     name: showImageName,
  //   };
  // } catch (e) {
  //   return { path: exampleUrl, name: showImageName}
  // }
};