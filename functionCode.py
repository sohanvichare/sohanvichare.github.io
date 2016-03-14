#define location class that stores latitude and longitude
class Location:
   "Basic Location class, used to store latitude and longitude"
   def __init__(self, latitude, longitude):
      self.latitude = latitude
      self.longitude = longitude
#define SafeLocation class, which stores location data, which people are at each Safe Location
class SafeLocation:
    "Safe Location class, used to store data for a safe location. Has two attributes, one is location (a location object which stores the location), and the second is peopleArrivedArray, which is an array that stores the people who have reached this location."
    def __init__(self, location):
        self.location = location
        #an array of Person objects, used to store what people are already at the safeLocation
        self.peopleArrivedArray = [];
#initializes Drone
def initializeDrone(connectionString, isSimulator):
    print 'Connecting to vehicle;'
    vehicle = connect(connectionString, wait_ready=True)
#flies a vehicle to a target altitude
def arm_and_takeoff(aTargetAltitude):
    #Arms vehicle and fly to aTargetAltitude.
    print "Basic pre-arm checks"
    # Don't try to arm until autopilot is ready
    while not vehicle.is_armable:
        print " Waiting for vehicle to initialise..."
        time.sleep(1)
    print "Arming motors"
    # Copter should arm in GUIDED mode
    vehicle.mode  = VehicleMode("GUIDED")
    vehicle.armed  = True
    # Confirm vehicle armed before attempting to take off
    while not vehicle.armed:
        print " Waiting for arming..."
        time.sleep(1)
    print "Taking off!"
    vehicle.simple_takeoff(aTargetAltitude)
    # Wait until the vehicle reaches a safe height before processing the goto (otherwise the command
    #  after Vehicle.simple_takeoff will execute immediately).
    while True:
        print " Altitude: ", vehicle.location.global_relative_frame.alt
        #Break and return from function just below target altitude.
        if vehicle.location.global_relative_frame.alt>=aTargetAltitude*0.95:
            print "Reached target altitude"
            break
        time.sleep(1)
