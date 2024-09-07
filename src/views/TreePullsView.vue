<template>
    <b-tabs content-class="mt-2" justified>
      <b-tab title="Before Aga 1" active>
        <b-container fluid>
          <b-row>
            <b-col class="border-end text-center">
              <h2>Light World</h2>
              <b-container fluid>
                <b-row>
                  <b-col>
                    <p>Kakariko house - Yellow dress informant</p>
                    <img src="@/assets/trees/kakariko_snitch_house.png" />

                    <p>Lost Woods</p>
                    <img src="@/assets/trees/lost_woods_pre-aga.png" />
                  </b-col>

                  <b-col>
                    <p>Tree south of the lumberjacks</p>
                    <img src="@/assets/trees/before_lumberjack.png" />
                    
                    <p>Hyrule Castle Garden</p>
                    <img src="@/assets/trees/hyrule_castle.png" />
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
            <b-col class="text-center">
              <h2>Dark World</h2>
              <b-container fluid>
                <b-row>
                  <b-col>
                    <p>Pyramid - West Statue</p>
                    <img src="@/assets/trees/pyramid.png" />

                    <p>Near Hype Cave</p>
                    <img src="@/assets/trees/north_swamp.png" />

                    <p>Turtle Rock</p>
                    <img src="@/assets/trees/turtle_rock.png" />
                  </b-col>

                  <b-col>
                    <p>South Swamp - East of Swamp Palace</p>
                    <img src="@/assets/trees/south_swamp.png" />

                    <p>Skeleton Forest - Near Bumper Cave</p>
                    <img src="@/assets/trees/skeleton_forest.png" />
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
      <b-tab title="After Aga 1">
        <b-container fluid>
          <b-row>
            <b-col class="border-end text-center">
              <h2>Light World</h2>
              <b-container fluid>
                <b-row>
                  <b-col>
                    <p>Kakariko house - Yellow dress informant</p>
                    <img src="@/assets/trees/kakariko_snitch_house.png" />

                    <p>Lost Woods</p>
                    <img src="@/assets/trees/lost_woods.png" />
                  </b-col>

                  <b-col>
                    <p>Eastern Palace</p>
                    <img src="@/assets/trees/ep.png" />
                    
                    <p>Near the swamp fairy cave</p>
                    <img src="@/assets/trees/swamp.png" />
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
            <b-col class="text-center">
              <h2>Dark World</h2>
              <b-container fluid>
                <b-row>
                  <b-col>
                    <p>Pyramid - West Statue</p>
                    <img src="@/assets/trees/pyramid.png" />

                    <p>Near Hype Cave</p>
                    <img src="@/assets/trees/north_swamp.png" />

                    <p>Turtle Rock</p>
                    <img src="@/assets/trees/turtle_rock.png" />
                  </b-col>

                  <b-col>
                    <p>South Swamp - East of Swamp Palace</p>
                    <img src="@/assets/trees/south_swamp.png" />

                    <p>Skeleton Forest - Near Bumper Cave</p>
                    <img src="@/assets/trees/skeleton_forest.png" />
                  </b-col>
                </b-row>
              </b-container>
            </b-col>
          </b-row>
        </b-container>
      </b-tab>
    </b-tabs>
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
</style>