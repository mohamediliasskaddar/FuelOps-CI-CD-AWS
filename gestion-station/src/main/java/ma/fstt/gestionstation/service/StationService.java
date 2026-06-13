package ma.fstt.gestionstation.service;

import ma.fstt.gestionstation.entity.Station;
import ma.fstt.gestionstation.repository.StationRepository;
import org.springframework.stereotype.Service;

import java.util.List;
@Service
public class StationService {
    private final StationRepository stationRepository;

    public StationService(StationRepository SR) {
        this.stationRepository = SR;
    }

    //methods
    public List<Station> getAllStations() {
        return stationRepository.findAll();
    }

    public Station getStationById(Long id) {
        return stationRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Station introuvable"));
    }

    public Station saveStation(Station station) {
        return stationRepository.save(station);
    }

    public Station updateStation(Long id, Station newStation) {
        Station existing = getStationById(id);
        existing.setNom(newStation.getNom());
        existing.setAdresse(newStation.getAdresse());
        existing.setVille(newStation.getVille());
        return stationRepository.save(existing);
    }

    public void deleteStation(Long id) {
        stationRepository.deleteById(id);
    }

}
