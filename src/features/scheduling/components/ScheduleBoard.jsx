import Map from "@/components/Map";
import Choose from "@/components/Choose";
import dispatchables from "@/utils/dispatchables";

const ScheduleBoard = ({ scheduleFormData }) => {
  const { showAlert } = dispatchables();

  return (
    <div className="schedule-dashboard">
      <h3 className="schedule-dashboard-title">Details</h3>

      <div className="px-2 py-5 border-basic md:flex gap-5">
        <div className="schedule-location">
          <div className="md:flex items-start justify-between">
            <div className="schedule-detail tablet:w-5/12 tablet:border-8">
              <div>
                <p className="schedule-detail-title">Your Location</p>
                <p className="schedule-text">{scheduleFormData.origin}</p>
              </div>
              <div>
                <p className="schedule-detail-title">Destination</p>
                <p className="schedule-text">{scheduleFormData.destination}</p>
              </div>
            </div>

            <div className="schedule-detail">
              <div>
                <p className="schedule-detail-title">Time:</p>
                <p className="schedule-text">{scheduleFormData.time} PM</p>
              </div>
              <div>
                <p className="schedule-detail-title">Passengers</p>
                <p className="schedule-text">{scheduleFormData.quantity}</p>
              </div>
            </div>

            <div className="schedule-detail">
              <div>
                <p className="schedule-detail-title">Date</p>
                <p className="schedule-text">{scheduleFormData.date}</p>
              </div>
              <div>
                <p className="schedule-detail-title">Ride Sharing</p>
                <p className="schedule-text">{scheduleFormData.share}</p>
              </div>
            </div>
          </div>

          <div className="flex items-end gap-4 mt-6">
            <Choose
              choice1txt="Proceed"
              choice2txt="Cancel"
              handleChoice1={() => showAlert("processing your schedule")}
              handleChoice2={() => showAlert("dropping changes")}
            />
          </div>
        </div>

        <div className="schedule-map-container">
          <Map className="max-w-full h-[285px]" />
        </div>
      </div>
    </div>
  );
};

export default ScheduleBoard;
