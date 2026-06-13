package ma.fstt.gestionstation.service;

import ma.fstt.gestionstation.dto.HistoCarbDTO;
import ma.fstt.gestionstation.entity.Carburant;
import ma.fstt.gestionstation.entity.HistoCarb;
import ma.fstt.gestionstation.entity.Station;
import ma.fstt.gestionstation.repository.CarburantRepository;
import ma.fstt.gestionstation.repository.HistoCarbRepository;
import ma.fstt.gestionstation.repository.StationRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class HistoCarbService {

    private final HistoCarbRepository histoCarbRepository;
    private final StationRepository stationRepository;
    private final CarburantRepository carburantRepository;

    public HistoCarbService(HistoCarbRepository histoCarbRepository,
                            StationRepository stationRepository,
                            CarburantRepository carburantRepository) {
        this.histoCarbRepository = histoCarbRepository;
        this.stationRepository = stationRepository;
        this.carburantRepository = carburantRepository;
    }

    public List<HistoCarb> getAllHistoCarbs() {
        return histoCarbRepository.findAll();
    }

    public List<HistoCarb> getHistoriquePrix(Long stationId, Long carburantId) {
        return histoCarbRepository.findByStationIdAndCarburantId(stationId, carburantId);
    }

//    public HistoCarbDTO getHistoCarbById(Long histoCarbId) {
//       return histoCarbRepository.getById(histoCarbId);
//    }

    public HistoCarb addPrix(Long stationId, Long carburantId, HistoCarbDTO dto) {
        Station station = stationRepository.findById(stationId)
                .orElseThrow(() -> new RuntimeException("Station not found"));
        Carburant carburant = carburantRepository.findById(carburantId)
                .orElseThrow(() -> new RuntimeException("Carburant not found"));

        HistoCarb histoCarb = new HistoCarb();
        histoCarb.setDate(dto.getDate()); // convert String to LocalDate
        histoCarb.setPrix(dto.getPrix());
        histoCarb.setStation(station);
        histoCarb.setCarburant(carburant);

        return histoCarbRepository.save(histoCarb);
    }


    public HistoCarb updatePrix(Long id, HistoCarbDTO dto) {
        HistoCarb existing = histoCarbRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("HistoCarb not found"));

        // Mettre à jour les champs modifiables
        existing.setDate(dto.getDate());
        existing.setPrix(dto.getPrix());

        return histoCarbRepository.save(existing);
    }


    public void deletePrix(Long id) {
        histoCarbRepository.deleteById(id);
    }
}