const zlib = require('zlib');

// cleaned from skycrypt

const PET_DATA = {
    "ARMADILLO": {
    head: "https://nmsr.nickac.dev/headiso/c1eb6df4736ae24dd12a3d00f91e6e3aa7ade6bbefb0978afef2f0f92461018f",
    type: "mining",
  },
  "BAT": {
    head: "https://nmsr.nickac.dev/headiso/382fc3f71b41769376a9e92fe3adbaac3772b999b219c9d6b4680ba9983e527",
    type: "mining",
  },
  "BLAZE": {
    head: "https://nmsr.nickac.dev/headiso/b78ef2e4cf2c41a2d14bfde9caff10219f5b1bf5b35a49eb51c6467882cb5f0",
    type: "combat",
  },
  "CHICKEN": {
    head: "https://nmsr.nickac.dev/headiso/7f37d524c3eed171ce149887ea1dee4ed399904727d521865688ece3bac75e",
    type: "farming",
  },
  "HORSE": {
    head: "https://nmsr.nickac.dev/headiso/36fcd3ec3bc84bafb4123ea479471f9d2f42d8fb9c5f11cf5f4e0d93226",
    type: "combat",
  },
  "JERRY": {
    head: "https://nmsr.nickac.dev/headiso/822d8e751c8f2fd4c8942c44bdb2f5ca4d8ae8e575ed3eb34c18a86e93b",
    type: "combat",
  },
  "OCELOT": {
    head: "https://nmsr.nickac.dev/headiso/5657cd5c2989ff97570fec4ddcdc6926a68a3393250c1be1f0b114a1db1",
    type: "foraging",
  },
  "PIGMAN": {
    head: "https://nmsr.nickac.dev/headiso/63d9cb6513f2072e5d4e426d70a5557bc398554c880d4e7b7ec8ef4945eb02f2",
    type: "combat",
  },
  "RABBIT": {
    head: "https://nmsr.nickac.dev/headiso/117bffc1972acd7f3b4a8f43b5b6c7534695b8fd62677e0306b2831574b",
    type: "farming",
  },
  "SHEEP": {
    head: "https://nmsr.nickac.dev/headiso/64e22a46047d272e89a1cfa13e9734b7e12827e235c2012c1a95962874da0",
    type: "alchemy",
  },
  "SILVERFISH": {
    head: "https://nmsr.nickac.dev/headiso/da91dab8391af5fda54acd2c0b18fbd819b865e1a8f1d623813fa761e924540",
    type: "mining",
  },
  "WITHER_SKELETON": {
    head: "https://nmsr.nickac.dev/headiso/f5ec964645a8efac76be2f160d7c9956362f32b6517390c59c3085034f050cff",
    type: "mining",
  },
  "SKELETON_HORSE": {
    head: "https://nmsr.nickac.dev/headiso/47effce35132c86ff72bcae77dfbb1d22587e94df3cbc2570ed17cf8973a",
    type: "combat",
    subLore: "§7Run around town on your scary, yet trusty, steed!",
  },
  "WOLF": {
    head: "https://nmsr.nickac.dev/headiso/dc3dd984bb659849bd52994046964c22725f717e986b12d548fd169367d494",
    type: "combat",
  },
  "ENDERMAN": {
    head: "https://nmsr.nickac.dev/headiso/6eab75eaa5c9f2c43a0d23cfdce35f4df632e9815001850377385f7b2f039ce1",
    type: "combat",
  },
  "PHOENIX": {
    head: "https://nmsr.nickac.dev/headiso/23aaf7b1a778949696cb99d4f04ad1aa518ceee256c72e5ed65bfa5c2d88d9e",
    type: "combat",
  },
  "MAGMA_CUBE": {
    head: "https://nmsr.nickac.dev/headiso/38957d5023c937c4c41aa2412d43410bda23cf79a9f6ab36b76fef2d7c429",
    type: "combat",
  },
  "FLYING_FISH": {
    
"default": "https://nmsr.nickac.dev/headiso/40cd71fbbbbb66c7baf7881f415c64fa84f6504958a57ccdb8589252647ea",
head: "https://nmsr.nickac.dev/headiso/dab779bbccc849f88273d844e8ca2f3a67a1699cb216c0a11b44326ce2cc20",
type:"fishing"
  },
  "BLUE_WHALE": {
    head: "https://nmsr.nickac.dev/headiso/dab779bbccc849f88273d844e8ca2f3a67a1699cb216c0a11b44326ce2cc20",
    type: "fishing",
  },
  "TIGER": {
    head: "https://nmsr.nickac.dev/headiso/fc42638744922b5fcf62cd9bf27eeab91b2e72d6c70e86cc5aa3883993e9d84",
    type: "combat",
  },
  "LION": {
    head: "https://nmsr.nickac.dev/headiso/38ff473bd52b4db2c06f1ac87fe1367bce7574fac330ffac7956229f82efba1",
    type: "foraging",
  },
  "PARROT": {
    head: "https://nmsr.nickac.dev/headiso/5df4b3401a4d06ad66ac8b5c4d189618ae617f9c143071c8ac39a563cf4e4208",
    type: "alchemy",
  },
  "SNOWMAN": {
    head: "https://nmsr.nickac.dev/headiso/11136616d8c4a87a54ce78a97b551610c2b2c8f6d410bc38b858f974b113b208",
    type: "combat",
    subLore: "§7Fight alongside your pet Snowman!",
  },
  "TURTLE": {
    head: "https://nmsr.nickac.dev/headiso/212b58c841b394863dbcc54de1c2ad2648af8f03e648988c1f9cef0bc20ee23c",
    type: "combat",
  },
  "BEE": {
    head: "https://nmsr.nickac.dev/headiso/7e941987e825a24ea7baafab9819344b6c247c75c54a691987cd296bc163c263",
    type: "farming",
  },
  "ENDER_DRAGON": {
    head: "https://nmsr.nickac.dev/headiso/aec3ff563290b13ff3bcc36898af7eaa988b6cc18dc254147f58374afe9b21b9",
    type: "combat",
  },
  "GUARDIAN": {
    head: "https://nmsr.nickac.dev/headiso/221025434045bda7025b3e514b316a4b770c6faa4ba9adb4be3809526db77f9d",
    type: "enchanting",
  },
  "SQUID": {
    head: "https://nmsr.nickac.dev/headiso/01433be242366af126da434b8735df1eb5b3cb2cede39145974e9c483607bac",
    type: "fishing",
  },
  "GIRAFFE": {
    head: "https://nmsr.nickac.dev/headiso/176b4e390f2ecdb8a78dc611789ca0af1e7e09229319c3a7aa8209b63b9",
    type: "foraging",
  },
  "ELEPHANT": {
    head: "https://nmsr.nickac.dev/headiso/7071a76f669db5ed6d32b48bb2dba55d5317d7f45225cb3267ec435cfa514",
    type: "farming",
  },
  "MONKEY": {
    head: "https://nmsr.nickac.dev/headiso/13cf8db84807c471d7c6922302261ac1b5a179f96d1191156ecf3e1b1d3ca",
    type: "foraging",
  },
  "SPIDER": {
    head: "https://nmsr.nickac.dev/headiso/cd541541daaff50896cd258bdbdd4cf80c3ba816735726078bfe393927e57f1",
    type: "combat",
  },
  "ENDERMITE": {
    head: "https://nmsr.nickac.dev/headiso/5a1a0831aa03afb4212adcbb24e5dfaa7f476a1173fce259ef75a85855",
    type: "mining",
  },
  "GHOUL": {
    head: "https://nmsr.nickac.dev/headiso/87934565bf522f6f4726cdfe127137be11d37c310db34d8c70253392b5ff5b",
    type: "combat",
  },
  "JELLYFISH": {
    head: "https://nmsr.nickac.dev/headiso/913f086ccb56323f238ba3489ff2a1a34c0fdceeafc483acff0e5488cfd6c2f1",
    type: "alchemy",
  },
  "PIG": {
    head: "https://nmsr.nickac.dev/headiso/621668ef7cb79dd9c22ce3d1f3f4cb6e2559893b6df4a469514e667c16aa4",
    type: "farming",
  },
  "ROCK": {
    head: "https://nmsr.nickac.dev/headiso/cb2b5d48e57577563aca31735519cb622219bc058b1f34648b67b8e71bc0fa",
    type: "mining",
  },
  "SKELETON": {
    head: "https://nmsr.nickac.dev/headiso/fca445749251bdd898fb83f667844e38a1dff79a1529f79a42447a0599310ea4",
    type: "combat",
  },
  "ZOMBIE": {
    head: "https://nmsr.nickac.dev/headiso/56fc854bb84cf4b7697297973e02b79bc10698460b51a639c60e5e417734e11",
    type: "combat",
  },
  "DOLPHIN": {
    head: "https://nmsr.nickac.dev/headiso/cefe7d803a45aa2af1993df2544a28df849a762663719bfefc58bf389ab7f5",
    type: "fishing",
  },
  "BABY_YETI": {
    head: "https://nmsr.nickac.dev/headiso/ab126814fc3fa846dad934c349628a7a1de5b415021a03ef4211d62514d5",
    type: "fishing",
  },
  "MEGALODON": {
    head: "https://nmsr.nickac.dev/headiso/a94ae433b301c7fb7c68cba625b0bd36b0b14190f20e34a7c8ee0d9de06d53b9",
    type: "fishing",
  },
  "GOLEM": {
    head: "https://nmsr.nickac.dev/headiso/89091d79ea0f59ef7ef94d7bba6e5f17f2f7d4572c44f90f76c4819a714",
    type: "combat",
  },
  "HOUND": {
    head: "https://nmsr.nickac.dev/headiso/b7c8bef6beb77e29af8627ecdc38d86aa2fea7ccd163dc73c00f9f258f9a1457",
    type: "combat",
  },
  "TARANTULA": {
    head: "https://nmsr.nickac.dev/headiso/8300986ed0a04ea79904f6ae53f49ed3a0ff5b1df62bba622ecbd3777f156df8",
    type: "combat",
  },
  "BLACK_CAT": {
    head: "https://nmsr.nickac.dev/headiso/e4b45cbaa19fe3d68c856cd3846c03b5f59de81a480eec921ab4fa3cd81317",
    type: "combat",
  },
  "SPIRIT": {
    head: "https://nmsr.nickac.dev/headiso/8d9ccc670677d0cebaad4058d6aaf9acfab09abea5d86379a059902f2fe22655",
    type: "combat",
  },
  "GRIFFIN": {
    head: "https://nmsr.nickac.dev/headiso/4c27e3cb52a64968e60c861ef1ab84e0a0cb5f07be103ac78da67761731f00c8",
    type: "combat",
  },
  "MITHRIL_GOLEM": {
    head: "https://nmsr.nickac.dev/headiso/c1b2dfe8ed5dffc5b1687bc1c249c39de2d8a6c3d90305c95f6d1a1a330a0b1",
    type: "mining",
  },
  "GRANDMA_WOLF": {
    head: "https://nmsr.nickac.dev/headiso/4e794274c1bb197ad306540286a7aa952974f5661bccf2b725424f6ed79c7884",
    type: "combat",
  },
  "RAT": {
    head: "https://nmsr.nickac.dev/headiso/a8abb471db0ab78703011979dc8b40798a941f3a4dec3ec61cbeec2af8cffe8",
    type: "combat",
    
    head: "https://nmsr.nickac.dev/headiso/250de7097d939e447ca2d398441cba1d2a5e1a69052ac99c19ff20ad5a3f01ab", // my fav pet except for jerry ofc
    },
  "BAL": {
    head: "https://nmsr.nickac.dev/headiso/c469ba2047122e0a2de3c7437ad3dd5d31f1ac2d27abde9f8841e1d92a8c5b75",
    type: "combat",
  },
  "SCATHA": {
    head: "https://nmsr.nickac.dev/headiso/df03ad96092f3f789902436709cdf69de6b727c121b3c2daef9ffa1ccaed186c",
    type: "mining",
  },
  "GOLDEN_DRAGON": {
    head: "https://nmsr.nickac.dev/headiso/2e9f9b1fc014166cb46a093e5349b2bf6edd201b680d62e48dbf3af9b0459116",
    type: "combat",
  },
  "AMMONITE": {
    head: "https://nmsr.nickac.dev/headiso/a074a7bd976fe6aba1624161793be547d54c835cf422243a851ba09d1e650553",
    type: "fishing",
  },
  "BINGO": {
    head: "https://nmsr.nickac.dev/headiso/d4cd9c707c7092d4759fe2b2b6a713215b6e39919ec4e7afb1ae2b6f8576674c",
    type: "fishing",
  },
  "MOOSHROOM_COW": {
    head: "https://nmsr.nickac.dev/headiso/2b52841f2fd589e0bc84cbabf9e1c27cb70cac98f8d6b3dd065e55a4dcb70d77",
    type: "farming",
  },
  "SNAIL": {
    head: "https://nmsr.nickac.dev/headiso/50a9933a3b10489d38f6950c4e628bfcf9f7a27f8d84666f04f14d5374252972",
    type: "mining",
  },
  "KUUDRA": {
    head: "https://nmsr.nickac.dev/headiso/1f0239fb498e5907ede12ab32629ee95f0064574a9ffdff9fc3a1c8e2ec17587",
    type: "combat",
    alwaysGainsExp: "§cCrimson Isle",
  },
  "DROPLET_WISP": {
    head: "https://nmsr.nickac.dev/headiso/b412e70375ec99ee38ae94b30e9b10752d459662b54794dfe66fe6a183c672d3",
    type: "gabagool",
  },
  "FROST_WISP": {
    head: "https://nmsr.nickac.dev/headiso/1d8ad9936d758c5ea30b0b7cc7c67c2bfcea829ecf2425c0b50fc92a26ae23d0",
    type: "gabagool",
  },
  "GLACIAL_WISP": {
    head: "https://nmsr.nickac.dev/headiso/3e2018feebe1a99177b3cb196d4e44521268b4b3eb56e6419cb0253cdbf0456c",
    type: "gabagool",
  },
  "SUBZERO_WISP": {
    head: "https://nmsr.nickac.dev/headiso/7a0eb37e58c942eca4d33ab44e26eb1910c783788510b0a53b6f4d18881e237e",
    type: "gabagool",
  },
  "REINDEER": {
    head: "https://nmsr.nickac.dev/headiso/a2df65c6fd19a58bee38252192ac7ce2cf1dc8632c3547a9228b6b697240d098",
    type: "fishing",
  },
};


const ITEMSAPI = "https://api.hypixel.net/resources/skyblock/items"
const ALPHA = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ"
const PROXY = ""
const priceformax = {
    combatleg : 17_000_000, // calculated with current tiger
    combatepic: 14_000_000, // calculated with current tiger
    miningleg : 6_000_000,  // calculated with current mithril golem
    miningepic: 4_300_000,  // calculated with current mithril golem
    foragingleg:36_000_000, // calculated with current ocelot
    foragingepic:18_000_000,// calculated with current ocelot
    alchemyleg: 8_000_000,  // calculated with current sheep
    alchemyepic:5_000_000,  // calculated with current sheep
    farmingleg :7_000_000,  // calculated with current elephant
    farmingepic:5_000_000,  // calculated with current rabbit
    fishingleg :26_000_000, // calculated with current dolphin
    fishingepic:10_000_000, // calculated with current dolphin
    gabagoolleg:0,
    gabagoolepic:0
}
const REFORGES = ["Blooming","Pitchin","Rooted","Raggedy","Strengthened","Waxed","Fortunate","Excellent","Bustling","Honed","Hardened","Blooming","Glistening","NotSo","Dull","Hyper","Fair","Renowned","Loving","Gentle","Odd","Fast","Fair","Epic","Sharp","Heroic","Spicy","Legendary","Dirty","Fabled","Suspicious","Gilded","Warped","Withered","Bulky","Salty","Treacherous","Stiff","Lucky","Very","Highly","Extremely","Thicc","Absolutely","Even More", "Wise","Strong","Superior","Heavy","Light","Perfect","Refined","Deadly","Fine","Grand","Hasty","Neat","Rapid","Unreal","Awkward","Rich","Precise","Spiritual","Headstrong","Clean","Fierce","Mythic","Pure","Smart","Titanic","Necrotic","Ancient","Spiked","Cubic","Reinforced","Loving","Ridiculous","Empowered","Giant","Submerged","Jaded","Bizarre","Itchy","Ominous","Pleasant","Pretty","Shiny","Simple","Strange","Vivid","Godly","Demonic","Forceful","Hurtful","Keen","Strong","Unpleasant","Zealous","Silky","Bloody","Shaded","Sweet","Moil","Toil","Blessed","Bountiful","Magnetic","Fruitful","Refined","Stellar","Mithraic","Auspicious","Fleet","Heated","Ambered"]

class data{
    
    static itemTable = new Map();
    static isrunning = false;
    
    static async start() {

        
        if (data.isrunning) {return {"message" :"DATA NOT READY"}}
        data.isrunning = true;
        await data.#performTask()
        setInterval(() => {
            data.#performTask();
        }, 60 * 60 * 1000);
        return data.getItemTable();

    }
    static async #performTask(){
        console.log("LOading")
        var resp = await fetch(ITEMSAPI);
        var json = await resp.json()
        json.items.forEach(item => {
            let real_name = ""
            for (let char of item.name){
                if (ALPHA.includes(char)) {
                    real_name += char;
                }
            }
            REFORGES.forEach(reforge => {
                real_name = real_name.replace(reforge, "")
            })
            var image_link = "https://henry-santa.github.io/auction-manipulation/images/" + item.material.toLowerCase() + ".png"
            if (item.material == "SKULL_ITEM") {
                const skinUrl = getSkinUrl(item);
                if (skinUrl) {
                    const hash = skinUrl.split("/").pop();
                    image_link = "https://nmsr.nickac.dev/headiso/" + hash;
                }
            }

            data.itemTable.set(real_name, {name : item.name, id : item.id, image : image_link})
        })
        for (let pet of Object.keys(PET_DATA)){
            
            pet = pet.toLowerCase();
            var words = pet.split("_");
            var new_words = []

            for (let word of words){
                let nword = word.charAt(0).toUpperCase()
                + word.slice(1)
                new_words.push(nword)

            }
            var final = new_words.join("")
            data.itemTable.set("Lvl"+final, {name : new_words.join(" "), id : pet.toUpperCase(), image: PET_DATA[pet.toUpperCase()].head})
        }
        let promises = []

        let NEU = "https://moulberry.codes/auction_averages/3day.json.gz"
        let neuresp = await fetch(NEU);
        const compressedData = await neuresp.arrayBuffer();

        const decompressedData = zlib.gunzipSync(compressedData);
        const priceData = JSON.parse(decompressedData.toString());

        for (let item of data.itemTable.keys()){
            
            promises.push(new Promise(async (resolve, reject) => {
                setTimeout(
                    async () => {
                        if (item.startsWith("Lvl")){
                            setTimeout(
                                async () => {
                                
                                
                                try{
                                // level 1 cost legendary
                                
                                data.itemTable.get(item)["leg1"] = priceData[data.itemTable.get(item).id + ";4"].price;
                                // level 100 cost legendary
                                
                                
                                data.itemTable.get(item)["leg100"] = priceData[data.itemTable.get(item).id + ";4"].price + priceformax[PET_DATA[data.itemTable.get(item).id].type+"leg"];
                                // level 1 cost epic
                                
                                data.itemTable.get(item)["epic1"] = priceData[data.itemTable.get(item).id + ";3"].price;
                                // level 100 cost epic
                                
                                data.itemTable.get(item)["epic100"] = priceData[data.itemTable.get(item).id + ";3"].price + priceformax[PET_DATA[data.itemTable.get(item).id].type+"epic"];} catch{
                                  console.log(item, data.itemTable.get(item).id + ";4");

                                }
                                resolve()
                                //console.log(priceData[data.itemTable.get(item).id].price, item)
                                }
                            )
                            
                        } else {
                            
                            
                            
                            try {
                                if (priceData[data.itemTable.get(item).id]){
                                data.itemTable.get(item)["price"] = priceData[data.itemTable.get(item).id].price;}
                                
                            } catch (error) {
                                console.error('Error occurred while updating item price:', error, item);
                            }
                            resolve()
                        }
                        
                    }, 0
                )
                // https://sky.coflnet.com/api/item/price/SHEEP_PET?Rarity=LEGENDARY&PetLevel=1
                // https://sky.coflnet.com/api/item/price/SHEEP_PET
                
                
            }));

        }
        await Promise.all(promises)

        console.log("LOADED")
    }
    
    static getItemTable(){
        const rVal = data.itemTable
        const returnval = Object.fromEntries(Array.from(rVal))
        return returnval;
    }

}

const getSkinUrl = (item) => {
    if (!item.skin) return null;
    try {
        const decoded = Buffer.from(item.skin, 'base64').toString();
        const skinData = JSON.parse(decoded);
        return skinData?.textures?.SKIN?.url;
    } catch (error) {
        console.warn('Error parsing skin data:', error);
        return null;
    }
};

export { data };
/**
 * 
 * @param {Request} req 
 * @param {Response} res 
 */
export default async function handler(req, res) {
    // Set CORS headers
    res.setHeader('Access-Control-Allow-Credentials', true);
    res.setHeader('Access-Control-Allow-Origin', 'https://henry-santa.github.io');
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS');
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type');

    // Handle OPTIONS request for CORS preflight
    if (req.method === 'OPTIONS') {
        res.status(200).end();
        return;
    }

    try {
        let d = data.getItemTable();
        if (Object.keys(d).length > 0) {
            res.status(200).json(d);
        } else {
            // If data is not initialized, initialize it
            d = await data.start();
            res.status(200).json(d);
        }
    } catch (error) {
        console.error('Error in prices API:', error);
        res.status(500).json({ error: 'Internal server error', details: error.message });
    }
}
