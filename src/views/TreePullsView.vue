<template>
    <Tabs value="0">
      <TabList>
        <Tab value="0" class="w-6 p-4">Before Aga 1</Tab>
        <Tab value="1" class="w-6 p-4">After Aga 1</Tab>
      </TabList>
      <TabPanels>
        <TabPanel value="0">
          <div class="grid">
            <div class="col light-world text-center">
              <h2 class="text-center">Light World</h2>
              <div class="grid">
                <div class="col">
                  <p>Kakariko house - Yellow dress informant</p>
                  <img src="@/assets/trees/kakariko_snitch_house.png" />

                  <p>Lost Woods</p>
                  <img src="@/assets/trees/lost_woods_pre-aga.png" />
                </div>

                <div class="col">
                  <p>Tree south of the lumberjacks</p>
                  <img src="@/assets/trees/before_lumberjack.png" />
                  
                  <p>Hyrule Castle Garden</p>
                  <img src="@/assets/trees/hyrule_castle.png" />
                </div>
              </div>
            </div>
            <div class="col text-center">
              <h2 class="text-center">Dark World</h2>
              <div class="grid">
                <div class="col">
                  <p>Pyramid - West Statue</p>
                  <img src="@/assets/trees/pyramid.png" />

                  <p>Near Hype Cave</p>
                  <img src="@/assets/trees/north_swamp.png" />

                  <p>Turtle Rock</p>
                  <img src="@/assets/trees/turtle_rock.png" />
                </div>

                <div class="col">
                  <p>South Swamp - East of Swamp Palace</p>
                  <img src="@/assets/trees/south_swamp.png" />

                  <p>Skeleton Forest - Near Bumper Cave</p>
                  <img src="@/assets/trees/skeleton_forest.png" />
                </div>
              </div>
            </div>
          </div>
        </TabPanel>
        <TabPanel value="1">
          <div class="grid">
            <div class="col light-world text-center">
              <h2 class="text-center">Light World</h2>
              <div class="grid">
                <div class="col">
                  <p>Kakariko house - Yellow dress informant</p>
                  <img src="@/assets/trees/kakariko_snitch_house.png" />

                  <p>Lost Woods</p>
                  <img src="@/assets/trees/lost_woods.png" />
                </div>

                <div class="col">
                  <p>Eastern Palace</p>
                  <img src="@/assets/trees/ep.png" />
                  
                  <p>Swamp near fairy cave</p>
                  <img src="@/assets/trees/swamp.png" />
                </div>
              </div>
            </div>
            <div class="col text-center">
              <h2 class="text-center">Dark World</h2>
              <div class="grid">
                <div class="col">
                  <p>Pyramid - West Statue</p>
                  <img src="@/assets/trees/pyramid.png" />

                  <p>Near Hype Cave</p>
                  <img src="@/assets/trees/north_swamp.png" />

                  <p>Turtle Rock</p>
                  <img src="@/assets/trees/turtle_rock.png" />
                </div>

                <div class="col">
                  <p>South Swamp - East of Swamp Palace</p>
                  <img src="@/assets/trees/south_swamp.png" />

                  <p>Skeleton Forest - Near Bumper Cave</p>
                  <img src="@/assets/trees/skeleton_forest.png" />
                </div>
              </div>
            </div>
          </div>          
        </TabPanel>
      </TabPanels>
    </Tabs>
</template>

<script setup lang="ts">


</script>

<style>
#app {
  margin: 0;
  padding: 0;
  max-width:none;
}

body{ overflow-x:hidden;overflow-y:hidden;padding:0; }

.col p {
  margin-bottom: 0px;
}
.col img {
  margin-bottom: 10px;
}

.light-world {
  border-right: 1px solid #fff;
}

button {
  border:0px;
}
</style>